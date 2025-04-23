import ButtonMenu from "../buttons/button"



export default function BodyTienda() {
    const listButtons = [
        {
            name:"Inicio",
            icon:"inicio",
            bg: "button-menu",
            fn: {
                active:true,
                name:""
            },
            route: '/tienda/inicio'
        },
        {
            name:"Tienda",
            icon:"tienda",
            bg: "button-menu",
            fn: {
                active:true,
                name:""
            },
            route: "/tienda"
        },
        {
            name:"Espera",
            icon:"espera",
            bg: "button-menu",
            fn: {
                active:true,
                name:"mamahuevo"
            },
            route: "/tienda/espera"
        },
        {
            name:"Cartera",
            icon:"cartera",
            bg: "button-menu",
            fn: {
                active:true,
                name:"mamahuevo"
            },
            route: "/tienda/cartera"
        },
        {
            name:"Historial",
            icon:"historial",
            bg: "button-menu",
            fn: {
                active:true,
                name:"mamahuevo"
            },
            route: "/tienda/historial"
        }
    ];
 
    return (
        <>
            <div className="body-tienda-title">
                <p>Menú</p>
            </div>

            <div className="body-container">
                {listButtons.map((button, index) => {
                    return (
                        <ButtonMenu texto={button.name} icono={button.icon} bg={button.bg}key={index} route={button.route}/>
                    )
                })}
            </div>
            
        </>

    )
}