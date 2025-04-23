import LogoIcon from "../../../iconos/logoIcon"


export default function FooterTienda() {
    return (
        <>
            <div className="menu-tienda-logo">
                <LogoIcon />
            </div>
            
            <div className="menu-tienda-text">
                <div className="menu-tienda-title">
                    <p>Juan Felipe</p>
                </div>
                <div className="menu-tienda-subtitle">
                    <p>ID: 01</p>
                </div>
            </div>
        </>
    )
}