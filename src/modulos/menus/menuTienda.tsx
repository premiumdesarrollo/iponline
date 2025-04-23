
import './menu.css';
import HeaderTienda from './headers/headerTienda';
import BodyTienda from './bodys/bodyTienda';
import FooterTienda from './footers/footerTienda';


export default function MenuTienda() {
  return (
    <>
        <div className="bg-tienda">
            <div className="menu-tienda">
                <div className="menu-tienda-header">
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