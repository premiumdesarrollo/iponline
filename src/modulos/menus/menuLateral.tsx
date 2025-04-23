import './menu.css';
import HeaderTienda from './headers/headerLateral';
import BodyTienda from './bodys/bodyLateral';
import FooterTienda from './footers/footerLateral';
import Cookies from 'js-cookie';
import {getDataCliente,getDataProductos} from '../functions/apiLogin';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { cargarProductos } from '../../features/product/productSlice';
import { cargarUsuarios } from '../../features/user/userSlice';


export default function MenuLateral({email, password}: {email:string, password:string}) {

  const [infoCliente, setInfoCliente] = useState({
    adicional: '',
    barrio: '',
    cedula: '',
    celular: '',
    ciudad: '',
    departamento: '',
    direccion: '',
    fecha: '',
    genero: '',
    nombre: '',
    pais: '',
    telefono: '',
    token: ''
  });
  
  const dispatch = useDispatch<AppDispatch>();
  const [dataProductos, setDataProductos] = useState<any>([
  ]);
 
  // const [data,setData] = useState<any>();
  // useEffect(() => { 
  //   const fetchData = async () => {
  //     const token = Cookies.get('token');
  //     if (token) {
  //       const clienteData = await getDataCliente(token,email,password);
  //       const id_bodega = clienteData[0].id_bodega;
  //       const id_empresa = clienteData[0].id_empresa;
  //       const productosData = await getDataProductos(token,email,password,id_bodega,id_empresa); 
  //       // setDataProductos(productosData.lista)           
  //       // productosData.lista.map((producto:any) => { setDataProductos(producto); });
  //       // // dispatch(cargarProductos(dataProductos));                           
  //     } else { console.log('No hay token disponible'); } 
  //   }
  //   fetchData();
  //   // console.log('Data productos',dataProductos);
  // } , []); 

  // [useEffect(() => {
  //   const fetchData = async () => {
  //     const token = Cookies.get('token');
  //     console.log('🪙 TOKEN:', token);
  
  //     if (!token) return;
  
  //     const clienteData = await getDataCliente(token, email, password);
  //     console.log('👤 ClienteData:', clienteData);
  
  //     const id_bodega = clienteData?.[0]?.id_bodega;
  //     const id_empresa = clienteData?.[0]?.id_empresa;
  
  //     console.log('🏢 id_empresa:', id_empresa, '📦 id_bodega:', id_bodega);
  
  //     const productosData = await getDataProductos(token, email, password, id_bodega, id_empresa);
  //     console.log('📦 ProductosData:', productosData);
  
  //     if (Array.isArray(productosData?.lista)) {
  //       setDataProductos(productosData.lista);
  //       console.log('✅ Productos seteados:', productosData.lista);
  //     } else {
  //       console.log('❌ No es array:', productosData?.lista);
  //     }
  //   };
  
  //   dispatch(cargarProductos(dataProductos));

  //   fetchData();
  // }, []);]

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get('token');
      if (!token) return;
  
      try {
        const clienteData = await getDataCliente(token, email, password);
        // console.log('👤 clienteData:', clienteData);
        setInfoCliente(clienteData[0].usuario);
        dispatch(cargarUsuarios(clienteData))
        const id_bodega = clienteData?.[0]?.id_bodega;
        const id_empresa = clienteData?.[0]?.id_empresa;
  
        const productosData = await getDataProductos(token, email, password, id_bodega, id_empresa);
        // console.log('📦 productosData:', productosData);
  
        if (Array.isArray(productosData?.lista)) {
          // console.log('✅ Despachando productos reales:', productosData.lista.length);
          dispatch(cargarProductos(productosData.lista));
        } else {
          console.log('❌ productosData.lista no es un array');
        }
      } catch (err) {
        console.error('🔥 Error en fetchData:', err);
      }
    };
  
    fetchData();
  }, [dispatch]);
  
 
  
  useEffect(() => {
    console.log('📊 Cambios en productos:', dataProductos);
  }, [dataProductos]);


  // const handleGetData = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const token = Cookies.get('token');
  //   if (token) {
  //       const clienteData = await getDataCliente(token,email,password);
  //       // const clienteEmail = clienteData[0].email;
  //       setInfoCliente(clienteData[0].usuario);
  //       // const id_bodega = clienteData[0].id_bodega;
  //       // const id_empresa = clienteData[0].id_empresa;
  //       // console.log(id_bodega, id_empresa);
  //       // const productosData = await getDataProductos(token,email,password,id_bodega,id_empresa);
  //       // const descomprimirInfo = decompress(productosData);
  //       // const brotliData = Uint8Array = productosData;
  //       // const productosJson = JSON.parse(new TextDecoder().decode(brotliData));
  //       // const descomprimirInfo = decompressSync(brotliData);
  //       // const productosJson = new TextDecoder().decode(brotliData);
  //       // console.log("Productos",productosJson);
  //       // const descripcion = JSON.parse(brotliData.lista[0].datos_productos);
  //       // console.log(descripcion);
  //       // console.log(brotliData.lista);
  //       // console.log(clienteData);
  //   }else {
  //     console.log('No hay token disponible');
  //   }

  // }
  
  return (
    <>
            <div className="menu">
                <div className="menu-header">
                    <HeaderTienda />
                </div>
                <div className="border"></div>
                <div className="menu-tienda-body">
                    <BodyTienda />
                    {/* <button className="btn-tienda" onClick={handleGetData}>Data</button> */}
                </div>

                <div className="menu-tienda-footer">
                    <FooterTienda infoCliente={infoCliente} />
                </div>
            </div>
    </>
  );
}