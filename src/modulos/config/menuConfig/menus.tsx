import MenuTop from "../../menus/menuTop";
import MenuTopAuxiliar from "../../menus/menuTopAux";
import TiendaData from "../../containers/tiendaData";
import InicioData from "../../containers/inicioData";
import menuConfig from "./menuConfig.json";
// import modalConfig from "../modalConfig/modalConfig.json";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CarteraData from "../../containers/carteraData";
// import { useDispatch } from "react-redux";

const infoMenu = menuConfig[0];


export function Menus() {  
  const listaProductos = useSelector((state: RootState) => state.product.productos);  
  const listaBusqueda = useSelector((state: RootState) => state.busqueda.busquedas);
  return {
    tienda: {
      menuTop: <MenuTop infoMenu={infoMenu.tienda} />,
      menuTopAux: <MenuTopAuxiliar infoMenu={infoMenu.tienda} />,
      dataContent: 
      <>
      
        {/* {listaBusqueda.length <= 0 ? (
          listaProductos.map((producto, index) => (
            <TiendaData key={index} producto={producto} />
          ))
          // <p></p>
        ) : (
          listaBusqueda.map((producto, index) => (
            <TiendaData key={index} producto={producto} />
          ))
        )} */}
        {listaBusqueda.length == 0 ? (
          listaProductos.length == 0 ? (
            <p>No hay productos</p>
          ) : (
            listaProductos.map((producto, index) => (
              <TiendaData key={index} producto={producto} />
            ))
          )
        ) : listaBusqueda.length == 0 ? (
          <p>No tenemos ese producto por el momento</p>
        ) : (
          listaBusqueda.map((producto, index) => (
            <TiendaData key={index} producto={producto} />
          ))
        )}
      </>
    },
    inicio: {
      menuTop: <MenuTop infoMenu={infoMenu.inicio} />,
      menuTopAux: <MenuTopAuxiliar infoMenu={infoMenu.inicio} />,
      dataContent: <InicioData />,
    },
    historial: {
      menuTop: <MenuTop infoMenu={infoMenu.historial} />,
      menuTopAux: <MenuTopAuxiliar infoMenu={infoMenu.historial} />,
      dataContent: <InicioData />,
    },
    espera: {
      menuTop: <MenuTop infoMenu={infoMenu.espera} />,
      menuTopAux: <MenuTopAuxiliar infoMenu={infoMenu.espera} />,
      dataContent: <InicioData />,
    },
    cartera: {
      menuTop: <MenuTop infoMenu={infoMenu.cartera} />,
      menuTopAux: <MenuTopAuxiliar infoMenu={infoMenu.cartera} />,
      dataContent: <CarteraData />,
    }
  };
}

export function ContentRutas({ type,}: { type: keyof ReturnType<typeof Menus>; }) 
{
  const menus = Menus();
  return (
    <div className="content">
      <div className="lateral">
        {menus[type].menuTop}
        {menus[type].menuTopAux}
      </div>
      <div className={`contentData container-${type}`}>
        {menus[type].dataContent}
        </div>
    </div>
  );
}
