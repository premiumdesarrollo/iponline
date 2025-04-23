import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import carritoSlice from "../features/carrito/carritoSlice";
import userSlice from "../features/user/userSlice";
import busquedaSlice from "../features/busqueda/busquedaSlice";

export const store = configureStore({
    reducer:{
        product: productSlice,
        carrito: carritoSlice,
        user: userSlice,
        busqueda: busquedaSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;