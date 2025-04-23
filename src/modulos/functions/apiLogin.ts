import Cookies from 'js-cookie';

export async function loginApi(email: string, password:string): Promise<any> {
    try {
        const response = await fetch('https://api.premiumotos.com/gopeticion/sesionGo', {
            method:'POST',
            // mode:'cors',
            // headers: {
            //     'Accept':'application/json',
            //     'Content-Type':'application/json',
            //     'Access-Control-Allow-Methods':'POST'
            // },
            body: JSON.stringify({email:email, password:password}),
        });

        if (!response.ok) { 
            throw new Error('Error en la autenticación'); 
        }

        const data = await response.json();
        Cookies.set('token', data.token, { expires: 0.5 });
        const token = Cookies.get('token');
        return token;
        
        // console.log(response);
    } catch (error) {
        console.log(error);
    }
    // console.log(await response.json());
    // if (!response.ok) { throw new Error('Error en la autenticación'); }
    // const data = await response.json();
    // return data;
}

export async function getDataCliente (token: string,email:string, password:string): Promise<any> {
    try{
        const response = await fetch('https://api.premiumotos.com/gopeticion/infoUsuario', {
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        });
        if (response.status == 401){
            console.log('Token no valido', response.status);
            const data = await loginApi(email, password);
            console.log('Nuevo token generado', data);
        } else if (!response.ok) {
            throw new Error('Error al obtener los datos del cliente');
        }
        const data = await response.json();
        const cliente = await JSON.parse(data.lista);
        return cliente;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getDataProductos (token:string, email:string, password:string,id_bodega:string,id_empresa:string) : Promise<any> {
    
    // id_bodega.toString();
    // id_empresa.toString();
    
    try {
        const response= await fetch('https://api.premiumotos.com/gopeticion/todoProductosGo', {
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            // body: JSON.stringify({idBodega:id_bodega, idEmpresa:id_empresa}),
            body: JSON.stringify({idBodega:id_bodega.toString(), idEmpresa:id_empresa.toString()}),
        });
        console.log('Response:', response.status);
        if (response.status == 401){
            console.log('Token no valido', response.status);
            const data = await loginApi(email, password);
            console.log('Nuevo token generado', data);
        } else if (!response.ok) {
            console.log(response.body);
            throw new Error('Error al obtener los datos de los productos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getDataBusqueda (token:string, id_bodega:string, id_empresa:string, busqueda:string,id_vendedor:string, id_cliente:string, marca:string): Promise<any> {
    try {
        const response = await fetch('https://api.premiumotos.com/gopeticion/busquedaGoBrotli', {
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({idBodega:id_bodega.toString(), idEmpresa:id_empresa.toString(), busqueda:busqueda, idVendedor:id_vendedor, idCliente:id_cliente, marca:marca}),
        });
        
        if (response.status == 401){
            console.log('Token no valido', response.status);
            // const data = await loginApi(email, password);
            // console.log('Nuevo token generado', data);
        } else if (!response.ok) {
            throw new Error('Error al obtener los datos de los productos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getDataCarrito (token:string, id_producto:string, id_usuario:string, cantidad:string, precioUnitario:string, id_bodega:string,tipoCliente:string,stockNegativo:string,id_empresa:string,id_cliente:string, estado:string ) {
    const pipi = ["token",token, "id producto",id_producto,"id usuario",id_usuario,"cantidad", cantidad, "precio",precioUnitario, "id bodega",id_bodega,"tipo cliente",tipoCliente,"stock negativo",stockNegativo,"id empresa",id_empresa,"id cliente",id_cliente, "estado",estado];
    try {
        const response = await fetch('https://api.premiumotos.com/gopeticion/ingresoCarritoMasivoGo', {
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({idProducto:id_producto.toString(),idUsuario:id_usuario.toString(),Cantidad:cantidad.toString(),PrecioUnitario:precioUnitario.toString(),Estado:estado.toString(),idBodega:id_bodega.toString(),TipoCliente:tipoCliente.toString(),StockNegativo:stockNegativo.toString(),idEmpresa:id_empresa.toString(),idCliente:id_cliente.toString()})
            
        });
        console.log('Response:',pipi);
        if (response.status == 401) {
            console.log("Token no valido", response.status);    
        } else if (!response.ok) {
            throw new Error("Error al ingresar el producto al carrito");
        }

        const data = await response.json();
        return data;

        } catch (error) {
        console.log(error);
    }
}

// export async function actualizarCantidad () {
//     try {
//         const response = await fetch('https://api.premiumotos.com/gopeticion/actualizarCantidadGo', {
//             method: 'POST',
//             headers: {
//                 'Authorization' : `Bearer ${token}`
//             },
//             body: JSON.stringify({});
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }