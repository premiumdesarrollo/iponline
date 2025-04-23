import Iconos from "../../../libraries/iconos";
import {useState} from "react";
import modalConfig from "../../../modulos/config/modalConfig/modalConfig.json";
// import ModalDinamico from "../modalDinamico";

// import React from "react";
// import ModalLateral from "../modalLateral";
const dataModal = modalConfig[0];


export default function ModalHeader({onClose,infoModal}: {onClose:()=>void,infoModal:{title:string,subtitle:string,iconos:string[]}}) {
    
    // const [infoModal, setInfoModal] = useState(infoModal);
    
    const [mostrarDinamico, setMostrarDinamico] = useState(false);
    const [contentData, setContentData] = useState<{ title: string; subtitle: string; iconos: string[] } | undefined>(undefined);
    const [historial,setHistorial] = useState<{title:string,subtitle:string,iconos:string[]}[]>([]);
    
    
    const handleClick = (id:string) => {
        
        setHistorial(prev => [...prev,contentData!]);

        if (id == "opciones") {
            setMostrarDinamico(true);
            setContentData(dataModal.opciones);
            
            
        } else if (id == "finalizar") {
            setMostrarDinamico(true);
            setContentData(dataModal.finalizar);
            
            console.log(historial);
        }
    }

    const handleBack = () => {
        console.log("back"), historial;
        if (historial.length > 0) {
            const lastData = historial[historial.length - 1];
            console.log(lastData);
            setHistorial(prev => prev.slice(0, -1));
            setContentData(lastData);
        } else {
            setMostrarDinamico(false);
        }
    }

    return (
        <>
        {/* <ModalDinamico setHistorial={setHistorial} setContentData={setContentData} handleClick={handleClick} isOpen={mostrarDinamico}contentData={contentData} onClose={() => setMostrarDinamico(false)}/> */}
        <div className="modal-header">
            <div className="header-text">
                <p className="header-title">{infoModal.title}</p>
                <p className="header-subtitle">{infoModal.subtitle}</p>
            </div>
            
           
            <button className="close-modal" onClick={handleBack}>
                <Iconos icono={Object.values(infoModal.iconos)[3] || "none"} />
            </button>
            
            
            <div className="header-svg" onClick={() => handleClick("finalizar")} >
                <Iconos icono={Object.values(infoModal.iconos)[5] || "none"} />
            </div>
        </div>
            
        </>
        
    );
}