import './menu.css';
import HeaderTienda from './headers/headerLateral';
import BodyTienda from './bodys/bodyLateral';
import FooterTienda from './footers/footerLateral';


export default function Menu() {
  return (
    <>
        <div className="bg-tienda">
            <div className="menu">
                <div className="menu-header">
                    <HeaderTienda />
                </div>
                <div className="border"></div>
                <div className="menu-tienda-body">
                    <BodyTienda />
                </div>

                <div className="menu-tienda-footer">
                    <FooterTienda />
                </div>
            </div>
        </div>
      
    </>
  );
}