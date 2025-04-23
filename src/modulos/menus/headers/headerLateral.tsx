import Iconos from "../../../libraries/iconos"


export default function HeaderTienda()  {

    return (
    <>
        <div className="menu-tienda-logo">
            <Iconos icono="logo" />
        </div>
        
        <div className="menu-tienda-text">
            <div className="menu-tienda-title">
                <p>IP Online</p>
            </div>
            <div className="menu-tienda-subtitle">
                <p>Importadora Premium Online</p>
            </div>
        </div>
    </>
    )             
   
}