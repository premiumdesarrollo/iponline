import Iconos from "../../libraries/iconos"
import { BuscadorGeneral } from "./buscador/buscador"
// import ButtonMenu from "./buttons/button"

interface MenuTop {
    title: string;
    subtitle:string;
    iconos: string[];
    type:string;
}

export default function MenuTopAuxiliar ({infoMenu}: {infoMenu:MenuTop}) {
   
    return (

        <div className="menu-top">
                <div className="menu-top-container">
                    
                    {/* <BuscadorAux infoModal={infoModal}/> */}
                    <BuscadorGeneral infoModal={infoMenu}/>
                    
                    <Iconos icono={Object.values(infoMenu.iconos)[2] || "none"} />
                    {/* {infoModal.iconos.download !== "none" ? (
                        <div className="menu-top-carrito">
                            <Iconos icono={infoModal.iconos.download} />
                        </div>
                    ) : null} */}

                </div>
                
            </div>
    )
}