import Iconos from "../../libraries/iconos";
import Images from "../../libraries/images";
import { useSelector } from "react-redux";
import { RootState } from "../../modulos/store";


function formatNumber(number: number) {
    return new Intl.NumberFormat('ES-CO').format(number);
}



export default function ModalData() {
    const listaCarrito = useSelector((state: RootState) => state.carrito.carrito);
    // const total = listaCarrito.reduce((acc, carrito) => acc + carrito.price, 0);

    return (
        <>
        {listaCarrito.map((producto:any) => (
            <div key={producto.id} className="item-data-modal">
                <div className="info-container">
                
                    <div className="item-data-info-modal">
                        <div className="carrito">
                            <Images img={producto.imageUrl[0]} />
                        </div>
                        
                        <div className="info-item">
                            <p className="name-item">{producto.name}</p>
                            <p className="modelo-item">{producto.modelo} | {producto.marca[0]}</p>
                            <p className="codigo-item">{producto.codigo}</p>
                        </div> 
                    </div>
                    <div className="carrito-marca">
                        <div className="carrito">
                        <Images img={producto.marca[0]} />
                        </div>
                    </div>
                
                </div>
                <div className="item-footer">
                    <div className="footer-info">
                        <button className="disminuir cantidad">-</button>
                        <input type="number" name="" id=""
                            defaultValue={1} />
                        <button className="aumentar cantidad">+</button>

                        
                    </div>
                    <div className="item-data-info-precio">
                        <div className="item-precio">
                        {(() => {
                            const precio = producto.price * ((100 - producto.descuento) !== 100 ? (100 - producto.descuento) / 100 : 1);
                            return <p>{`$${formatNumber(precio)}`}</p>;
                        })()}
                        </div>
                        <div className="item-precio-descuento">
                            <p>${formatNumber(producto.price)}</p>
                        </div>
                        <div className="item-svg">
                            <Iconos icono="eliminar" />
                        </div>
                        
                    </div>
                </div>
            </div>
        ))}
        {/* <div className="item-data-modal">
            <div className="info-container">
            
                <div className="item-data-info-modal">
                    <div className="carrito">
                        <Images img="producto1" />
                    </div>
                    
                    <div className="info-item">
                        <p className="name-item">Nombre del producto</p>
                        <p className="modelo-item">Modelo | Marca</p>
                        <p className="codigo-item">Codigo</p>
                    </div> 
                </div>
                <div className="carrito-marca">
                    <div className="carrito">
                    <Images img="yamaha" />
                    </div>
                </div>
            
            </div>
            <div className="item-footer">
                <div className="footer-info">
                    <button className="disminuir cantidad">-</button>
                    <input type="number" name="" id=""
                                    defaultValue={1} />
                    <button className="aumentar cantidad">+</button>

                    
                </div>
                <div className="item-data-info-precio">
                    <div className="item-precio">
                        <p>${formatNumber(2000)} |</p>
                    </div>
                    <div className="item-precio-descuento">
                        <p>${formatNumber(4000)}</p>
                    </div>
                    <div className="item-svg">
                        <Iconos icono="eliminar" />
                    </div>
                    
                </div>
            </div>
        </div> */}
        </>
    );
}