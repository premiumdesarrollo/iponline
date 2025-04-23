import { BrowserRouter as Router, Route,Routes } from "react-router-dom"; 
import PlantillaTienda from "./tienda/plantillaTienda";
import { ContentRutas } from "./config/menuConfig/menus";
import './menus/menu.css';


export default function Plantilla({isOpen,email,password}: {isOpen:boolean,email:string,password:string}) {

  if (!isOpen) return null;
  
  return (
     
    <>
      
      
        <Router>
            <Routes>
              <Route path="/tienda" element={<PlantillaTienda email={email} password={password} />}>
                <Route path="inicio" element={ContentRutas({type:"inicio"})} />
                <Route path="/tienda" element={ContentRutas({type: "tienda"})} />
                <Route path="espera" element={ContentRutas({ type: "espera" })} />
                <Route path="cartera" element={ContentRutas({type:"cartera"})} />
                <Route path="historial" element={ContentRutas({type:"historial"})} />
              </Route>
              <Route path="*" element={<PlantillaTienda email={email} password={password}/>}> 
              <Route path="*" element={ContentRutas({type: "tienda"})} />
              </Route>
            </Routes>
          </Router>
     
       

    </>
  );
}