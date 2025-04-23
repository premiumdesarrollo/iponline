export default function Images({img}: {img: string}) {    
    const images = {
        producto1: () => {
            return <img src="https://storage.googleapis.com/importadorapremiumonline/dependencias/img/productos/2GSE16031000/2GSE16031000-ANILLOS%20STANDAR%20FZ%20250%202.0%20YAMAHA%20-%201.webp" />
        },
        yamaha: () => {
            return <img src="https://storage.googleapis.com/importadorapremiumonline/dependencias/img/marcas/57432582_marcas-06.png" />
        }

    };        
    return images[img as keyof typeof images]();
}
   

