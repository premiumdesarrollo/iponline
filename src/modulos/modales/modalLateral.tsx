// import Iconos from "../../libraries/iconos";
// import { BrowserRouter as Router, Route,Routes } from "react-router-dom"; 
import ModalData from "../containers/modalData";
// import BuscadorAux from "../menus/buscador/buscador";
import ModalHeader from "./headers/modalHeader";

export default function ModalLateral ({isOpen,onClose,infoModal}: {isOpen:boolean,onClose:()=>void,infoModal:{title:string,subtitle:string,iconos:string[]}}) {
    
    if (!isOpen) {
        return null;
    } 

    const div = document.createElement("div");
    div.className = "bg-modal";
    document.body.appendChild(div);
    
    return (
       
             <div className="modal">
            <>
                <ModalHeader onClose={onClose} infoModal={infoModal}/>
                <div className="modal-buscador">
                    
                </div>
                <div className="modal-data-container">
                    <ModalData/>
                    
                </div>
                <div className="modal-footer">
                    <div className="footer-text">
                        <p className="footer-title">Total a pagar</p>
                        <p className="footer-price">$0.00</p>
                    </div>
                    <div className="button">
                     <button className="finalizar-compra">Finalizar Compra</button>
                    </div>
                </div>
            </>
             </div>
        
    )
}