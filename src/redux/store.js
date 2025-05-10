import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.jsx"

const store = configureStore({
    reducer: {
        cart: CartSlice
    }
})
export default store