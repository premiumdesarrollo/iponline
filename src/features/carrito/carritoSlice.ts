import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Carrito {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string[];
    category: string;
    stock: number;
    modelo: string;
    marca: string[];
    ventas: string[];
    ubicacion: string[];
    descuento: number;
    marcaNombre: string;
    nuevo: boolean;
    codigo: string;
}

interface CarritoState {
    carrito: Carrito[];
}

const initialState: CarritoState = {
    carrito: []
}

const carritoSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {
        agregarCarrito (state, action: PayloadAction<Carrito>) {
            state.carrito.push(action.payload);
        },
        eliminarCarrito(state, action: PayloadAction<number>) {
            state.carrito = state.carrito.filter(producto => producto.id !== action.payload)
        },
        vaciarCarrito(state) {
            state.carrito = []
        }
    }
})

export const { agregarCarrito, eliminarCarrito, vaciarCarrito } = carritoSlice.actions;
export default carritoSlice.reducer;