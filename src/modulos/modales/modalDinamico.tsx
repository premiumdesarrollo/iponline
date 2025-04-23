// import Iconos from "../../libraries/iconos";
import {useState, useEffect} from "react";
import modalConfig from "../config/modalConfig/modalConfig.json";
import { useSelector } from "react-redux";
import { RootState } from "../../modulos/store";
import {ModalEstructuraOpc} from "../config/modalConfig/clases";

interface modalData {
    title: string;
    subtitle:string;
    iconos: string[];
    type: string;
    buscador:boolean;
    doubleHeader:boolean;
    footer:boolean;
}

interface ModalDinamicoProps {
    infoModal: modalData;
    isOpen: boolean;
    onClose: () => void;
}

function formatNumber(number: number) {
    return new Intl.NumberFormat('ES-CO').format(number);
}


const ModalDinamico = ({ infoModal, isOpen, onClose }: ModalDinamicoProps) => {
    if (!isOpen) return null;

    const listaCarrito = useSelector((state: RootState) => state.carrito.carrito);
    const total = listaCarrito.reduce((acc, carrito) => acc + carrito.price, 0);

    const [modalData, setModalData] = useState<modalData>(infoModal);
    
    useEffect(() => {
        setModalData(infoModal);
    }, [infoModal]);
       

    useEffect(() => {
        if (isOpen) {
            const div = document.createElement("div");
            div.className = "bg-modal";
            document.body.appendChild(div);
        } else {
            const bgModal = document.querySelector(".bg-modal");
            if (bgModal) {
                bgModal.remove();
            }
        }

        
        return () => {
            const bgModal = document.querySelector(".bg-modal");
            if (bgModal) {
                bgModal.remove();
            }
        };
    }, [isOpen]);

    const [historial, setHistorial] = useState<modalData[]>([]);
    

    const updateHistorialAsync = async (newItem: modalData) => {
        return new Promise<void>((resolve) => {
            setHistorial(prev => {
                const newHistorial = [...prev, newItem]; 
                setTimeout(() => resolve(), 0);
                return newHistorial;
            });
        });
    };

    const handleClick = async (id:string) => {                
        await updateHistorialAsync(modalData);        
        if (id != undefined) {                                
            const types: keyof typeof modalConfig[0] = id as keyof typeof modalConfig[0];
            const modalConfigData = modalConfig[0][types];                                    
            setModalData(modalConfigData);            
        } else { console.warn("No se ha encontrado el id: " + id); }
    }

    const handleHistory = async () => {
        console.log(historial);
    }

    // const handleBack = async () => {
    //     if (historial.length > 0) {            
    //         const lastData = historial[historial.length - 1];
    //         setHistorial(historial.slice(0, -1)); 
    //         setModalData(lastData);             
    //     } else {
    //         onClose(); 
    //     }
    // }
    
    return (
        <div className="modal">
            {/* <div className={modalData.doubleHeader ? "modal-header double" : "modal-header"}>
                <div className={modalData.doubleHeader? "header-text doubleT" : "header-text"}>
                <p className="header-title">{modalData.title}</p>
                <p className="header-subtitle">{modalData.subtitle}</p>
                </div>
                <button className="close-modal" onClick={() => handleBack()}>
                <Iconos icono={Object.values(modalData.iconos)[3] || "none"} />
                </button>
                <div className="header-svg" onClick={() => handleClick("opciones")}>
                <Iconos icono={Object.values(modalData.iconos)[5] || "none"} />
                </div>
            </div> */}

            {/* <ModalEstructuraOpc type={modalData.type} /> */}
            <ModalEstructuraOpc infoModal={modalData} handleClick={handleClick} handleHistory={handleHistory} onClose={onClose} />
            
            <div className={modalData.footer? "modal-footer" : "modal-footer hidden"}>
                <div className="footer-text">
                    <p className="footer-title">Total a pagar</p>
                    <p className="footer-price">${formatNumber(total)}</p>
                </div>
                <div className="button">
                    <button className="finalizar-compra" onClick={() => handleClick("finalizar")}>
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ModalDinamico;