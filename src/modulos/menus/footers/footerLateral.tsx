import Iconos from "../../../libraries/iconos"

interface infoCliente {
    adicional: string;
    barrio: string;
    cedula: string;
    celular: string;
    ciudad: string;
    departamento: string;
    direccion: string;
    fecha: string;
    genero: string;
    nombre: string;
    pais: string;
    telefono: string;
    token: string;
}


export default function FooterTienda({infoCliente}: {infoCliente: infoCliente}) {
    return (
        <>
            <div className="menu-tienda-logo">
                <Iconos icono="logo" />
            </div>
            
            <div className="menu-tienda-text">
                <div className="menu-tienda-title">
                    <p>{infoCliente.nombre}</p>
                </div>
                <div className="menu-tienda-subtitle">
                    <p>{infoCliente.cedula}</p>
                </div>
            </div>
        </>
    )
}