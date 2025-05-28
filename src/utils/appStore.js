import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

//here we have reducer because it combines reducers from all slices

export default appStore;