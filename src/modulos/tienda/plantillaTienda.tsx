import MenuLateral from "../menus/menuLateral";
import { Outlet } from "react-router-dom";

export default function PlantillaTienda ({email, password}: {email:string, password:string}) {

   

    

    return (
        <>
            <div className="bg-tienda">
                <MenuLateral email={email} password={password}/>
                
                
                <Outlet />
                
                

            </div>
        </>
    )
}