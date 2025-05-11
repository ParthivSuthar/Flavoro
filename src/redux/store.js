import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.jsx"
import CategorySlice from "./slices/CategorySlice.jsx"

const store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice
    }
})
export default store