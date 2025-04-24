import MenuLateral from "../menus/menuLateral";
import { Outlet } from "react-router-dom";

export default function PlantillaEspera () {
    return (
        <>
            <div className="bg-tienda">
                <MenuLateral email={"0"} password={"0"}/>
                 
                 
                <Outlet />
                 
                 
 
            </div>
        </>
    )
}