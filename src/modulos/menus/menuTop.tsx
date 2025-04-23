import Iconos from "../../libraries/iconos";
import {useState} from "react";
import modalConfig from "../config/modalConfig/modalConfig.json";
import ModalDinamico from "../modales/modalDinamico";
// import { useSelector } from "react-redux";
// import { RootState } from "../store";

// import ModalLateral from "../modales/modalLateral";

// import { Link } from 'react-router-dom';

interface ModalData {
    title: string;
    subtitle:string;
    iconos: string[];
    type: string;
    buscador:boolean;
    doubleHeader:boolean;
    footer:boolean;
}

interface MenuData {
    title: string;
    subtitle:string;
    iconos: string[];
    type:string;
}

const infoModal = modalConfig[0];


export default function MenuTop ({infoMenu}: {infoMenu:MenuData}) {
     
    // const listaProductos = useSelector((state: RootState) => state.product.productos);  
   const [mostrarModal, setMostrarModal] = useState(false);


   const [modalActual, setModalActual] = useState<ModalData>(infoModal.carrito);

   const handleClose= () => {
         setMostrarModal(false);
         document.querySelector(".bg-modal")?.remove();
   }

    return (

        <>
                <>
                
                {/* <ModalLateral infoModal={infoModal.carrito} isOpen={mostrarModal} onClose={() => {
                    document.querySelector(".bg-modal")?.remove();    
                    setMostrarModal(false);
                }}/> */}
                
                
                <ModalDinamico 
                isOpen={mostrarModal} 
                onClose={handleClose}
                infoModal={modalActual}
                />
                <div className="menu-top">

                <div className="menu-top-text">
                    <div className="menu-top-container">
                        <div>                            
                            <div className="menu-top-title">
                                <p>{infoMenu.title}</p>
                            </div>
                            <div className="menu-top-subtitle">
                                <p>Mas de 7000 productos para elegir</p>
                            </div>
                        </div>
                        <div className="menu-top-carrito" onClick={() => {setModalActual(infoModal.carrito),setMostrarModal(true);}}>
                            
                            {/* {infoMenu.icono.name !== "none" ? (
                                <Iconos icono={infoMenu.icono.name} />
                            ) : null} */}
                            <Iconos icono={Object.values(infoMenu.iconos)[4] || "none"} />
                            
                        </div>
                    </div>
                </div>

                </div>
                </>
        </>

        
        
    );
}   