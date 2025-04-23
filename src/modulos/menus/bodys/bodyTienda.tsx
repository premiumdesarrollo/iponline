import TiendaIcon from "../../../iconos/tiendaIcon"
import InicioIcon from "../../../iconos/inicioIcon"
import EsperaIcon from "../../../iconos/esperaIcon"
import CarteraIcon from "../../../iconos/carteraIcon"
import HistorialIcon from "../../../iconos/histIcon"


export default function BodyTienda() {

    const handleClick = (): void => {
        const element = document.getElementById('1');
        if (element) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');

                const newElement = document.getElementById('2');
                newElement?.classList.toggle('active');
               
                const newElement2 = document.getElementById('3');
                newElement2?.classList.toggle('active');
                
                const newElement3 = document.getElementById('4');
                newElement3?.classList.toggle('active');
             
                const newElement4 = document.getElementById('5');
                newElement4?.classList.toggle('active');
                
            } else {
                element.classList.toggle('active');
            }
        }
        
    }

    return (
        <>
            <div className="body-tienda-title">
                <p>Menu</p>
            </div>

            <div className="body-container">
                <div className="body-tienda">
                    <div id={'1'} className="body-tienda-item" onClick={handleClick}>
                        <InicioIcon /><p>Inicio</p>
                    </div>
                    <div id={'2'} className="body-tienda-item"onClick={handleClick}>
                        <TiendaIcon /><p>Tienda</p>
                    </div>
                    <div id={'3'}className="body-tienda-item" onClick={handleClick} >
                       <EsperaIcon /><p>En espera</p>
                    </div>
                    <div id={'4'}className="body-tienda-item" onClick={handleClick}>
                        <CarteraIcon /><p>Cartera</p>
                    </div>
                    <div id={'5'}className="body-tienda-item" onClick={handleClick}>
                        <HistorialIcon /><p>Historial de pedidos</p>
                    </div>
                </div>
            </div>
        </>

    )
}