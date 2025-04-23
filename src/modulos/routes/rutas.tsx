import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InicioData from '../containers/inicioData';

export default function Rutas ({route}: {route: string}) {
    const validRoute = route || '/'; // Default to '/' if route is undefined or empty
    // console.log(validRoute);
    return (
        <>
        <Link to={validRoute}></Link> {/* Added text for better UX */}
        </>
            
        
    );
}