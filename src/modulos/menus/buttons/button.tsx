import '../menu.css';
import Iconos from '../../../libraries/iconos';
import Rutas from '../../routes/rutas';
import { Link } from 'react-router-dom';

 

export default function ButtonMenu ({texto, icono,bg,route}: {texto: string, icono: string, bg: string, route: string}) {
    return (
        <div className="body-tienda-item" >
            
            <Link to={route} style={{ textDecoration: 'none' }}>
                <button className={bg} onClick={() => Rutas({route: route})}>
                    <Iconos icono={icono}></Iconos>
                    <p>{texto}</p>
                   
                </button>
            </Link>
            {/* <button className={bg}>
                    <Iconos icono={icono}></Iconos>
                    <p>{texto}</p>
                </button> */}
        </div>

        
    )
}