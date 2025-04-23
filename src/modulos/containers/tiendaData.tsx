// import Images from "../../libraries/images";
import { useState,useEffect } from "react";
import { RootState } from "../../modulos/store";
import { useSelector } from "react-redux";

// import { useDispatch } from "react-redux";
// import { agregarCarrito } from "../../features/carrito/carritoSlice";
// import { AppDispatch } from "../../modulos/store";
import Cookies from "js-cookie";
import { getDataCarrito } from "../functions/apiLogin";

function formatNumber(number: number) {
    return new Intl.NumberFormat('ES-CO').format(number);
}

interface Producto {
    categoria: string;
    codigo: string; 
    datos_producto: string[];
    estado: string[];
    estado_promocion: string[];
    fecha: string;
    id: Int8Array;
    id_categoria: string;
    id_marca: string;
    id_modelo: string;
    imagen: string;
    imagenArray: string;
    marca: string;
    modelo: string;
    precios: string;
    precios_promocion: string[];
    aplicaciones: string[];
    descripcion: string;
    pickingTemporal: string;
    proveedores: string[];
    stock_max: Int8Array;
    stock_min: Int8Array;
    stock_reconteo: string;
    ubicacion: string[];
    ubicacion_reconteo: string;
}




export default function TiendaData({producto} : {producto: Producto}) {
    
    
    // const listaProductos = useSelector((state: RootState) => state.product.productos);
    // const dispatch = useDispatch<AppDispatch>();
    const listUsuarios = useSelector((state: RootState) => state.user.usuarios)
    // console.log('Lista usuarios:',listUsuarios);
    
    
    const [ordenar,setOrdenar] = useState(false);
    const [cantidad,setCantidad] = useState(1);
    const [esNuevo, setEsNuevo] = useState(false);
    const [arrPrecios, setArrayPrecios] = useState<string[]>([]);
    const [textCategoria, setTextCategoria] = useState("");
    const [textDescipcion, setTextDescripcion] = useState("");
    const [textModelo, setTextModelo] = useState("");
    const [textMarca, setTextMarca] = useState("");
    // const [productoAgregado,setProductoAgregado] = useState([])
     
    const token = Cookies.get('token');

    useEffect(() => {
        const fechaCreado = new Date(producto.fecha).getTime();
        const fechaActual = new Date().getTime();
        const fechaEsNuevo = fechaActual - fechaCreado;
        if (fechaEsNuevo <= 604800000) { // 7 days in milliseconds
            setEsNuevo(true);
        } else {
            setEsNuevo(false);
        }
    }, [producto.fecha]);

    useEffect(() => {
        
            const arrPrecios = JSON.parse(producto.precios);
            setArrayPrecios(arrPrecios);
            // const array = arrPrecios
            // console.log('Array precios:', arrPrecios[0]);
            // const primerosPrecios = arrPrecios.slice(0, 5);
            // console.log('Primeros precios:', primerosPrecios);
            
    }, [producto.precios]);
    
    // useEffect(() => {
    //     // const palabras = producto.descripcion.split(" ");
           
    //     //     for (let i = 0; i < palabras.length; i++) {
    //     //         palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    //     //     }
    // },[producto.descripcion]);

    const stockNegativo = false;
    const idCliente = "0";
    const estado = "general"
    const tipoCliente = "minoritario"
    const precioCarrito = "15000"

    useEffect(() => {
        const palabrasCategoria = producto.categoria.toLocaleLowerCase();
        const palabrasDescripcion = producto.descripcion.toLocaleLowerCase();
        const palabrasModelo = producto.modelo.toLocaleLowerCase();
        const palabrasMarca = producto.marca.toLocaleLowerCase();
        
        // console.log('Palabras:', palabrasCategoria);
        // const palabraCategoria = producto.categoria.charAt(0) + producto.categoria.slice(1).toLowerCase();
        setTextCategoria(palabrasCategoria);
        setTextDescripcion(palabrasDescripcion);
        setTextModelo(palabrasModelo);
        setTextMarca(palabrasMarca);
    },[producto.categoria, producto.descripcion, producto.modelo, producto.marca, ]);

    const handleClick = async () => {
        
        try {
            if (!token) {
                console.log("Error con el token")
                return;
            } else {
                console.log("Token usado",token)
                
                const data = await getDataCarrito(token, producto.id.toString(),listUsuarios[0].id_usuario.toString(),cantidad.toString(),precioCarrito,listUsuarios[0].id_bodega.toString(),tipoCliente,stockNegativo.toString(),listUsuarios[0].id_empresa.toString(),idCliente,estado.toString());
                console.log('Data carrito:', data);
                const resEstado = await data.estado
                resEstado.toString()
                console.log('Estado:', resEstado);
                if (resEstado == "4"){
                    // setProductoAgregado()
                }
            }

        } catch (error) {
            console.error('Error al agregar al carrito:', error);
        }
        if(ordenar === true) {
            setOrdenar(false);
        } else {
            setOrdenar(true);
        }
    }
    // console.log('Fecha creado:', fechaCreado);
    // console.log('Producto:', producto.fecha);
    // console.log('Imagen array:', arrImg[0]);
    // const imagen = arrImg[0] == "dependencias/img/producto/imagen_producto_default.png" ? `https://storage.googleapis.com/importadorapremiumonline/${arrImg[0]}` : arrImg[0];     
    // const imagen = JSON.stringify(producto.imagenArray[1]);
    // console.log('Producto:', imagen);
    
    return (
        <>
            
                <div id={String(producto.id)} className="item-data">
                {/* <div id={producto.id} className="item-data">                     */}
                        <div className="item-data-img-container">
                            
                            <img src={`https://storage.googleapis.com/importadorapremiumonline/${JSON.parse(producto.imagenArray)[0]}`} />
                            
                            <div className={producto.estado_promocion[0] == '1' ? 'estado-precio promo' : 'estado-precio hidden'}>
                                {/* <p>{producto.descuento}%</p> */}
                            </div>
                            {/* <div className='estado-precio nuevo-aux'>
                                <p>Nuevo</p>
                            </div> */}
                            <div className={esNuevo? 'estado-precio nuevo' : 'estado-precio hidden'}>
                                <p>Nuevo</p>
                            </div>
                           
                            
                        </div>
                    
                    <div className="item-data-info">
                        <div className="item-data-info-precio">
                            <div className="item-precio">
                             {/* {(() => {
                                if (producto.estado_promocion[0].active == 1) {
                                    const precio = producto.precio * ((100 - producto.descuento) !== 100 ? (100 - producto.descuento) / 100 : 1);
                                    return <p>{`$${formatNumber(precio)}`}</p>;
                                } else {
                                    <p>{`$${formatNumber(producto.precios[0])}`}</p>
                                }
                             })()} */}
                             <p>${formatNumber(parseFloat(arrPrecios[2]))}</p>
                            </div>
                            <div className="item-precio-descuento">
                                {/* <p>${formatNumber(producto.precios[0])}</p> */}
                            </div>
                        </div>
                        <div className="item-data-info-nombre">
                            {/* <p>{producto.categoria} {producto.descripcion.charAt(0).toUpperCase()}</p> */}
                            <p>{`${textCategoria} ${textDescipcion}`}</p>
                        </div>
                        <div className="item-data-info-modelo">
                            <div className="item-modelo">
                                {/* <p>{textModelo}</p> */}
                                <p>{`${textModelo} | ${textMarca}`}</p>
                            </div>
                            {/* <div className="item-marca-text">
                                <p> {textMarca}</p>
                            </div> */}
                        </div>
                        <div className="item-data-info-code">
                            <p>{producto.codigo}</p>
                        </div>
                        <div className="item-info-ordenar">
                            <div className="item-info-marca">
                                <div className="item-data-img-containe marca">
                                    {/* <Images img={producto.imagen} /> */}
                                    <img src={`https://storage.googleapis.com/importadorapremiumonline/${producto.imagen}`} />

                                </div>
                            </div>
                            <div className="item-ordenar">
                                {/* <input type="number" name="cantidadsita"
                                defaultValue={1} /> */}
                                <input
                                type="number"
                                className="stock"
                                value={cantidad}
                                onChange={(e) => setCantidad(Number(e.target.value))}
                                />
                                <button className={ordenar ? 'ordenado' : 'ordenar'} onClick={() => {handleClick()}}>{ordenar ? 'Agregado' : '+ Agregar'}</button>
                                {/* <button className={ordenar ? 'ordenado' : 'ordenar'} onClick={() => {handleClick(); dispatch(agregarCarrito(producto))}}>{ordenar ? 'Agregado' : '+ Agregar'}</button> */}
                            </div>
                        </div> 
                        
                    </div>
                </div>  
                
          
        </>
    )


}