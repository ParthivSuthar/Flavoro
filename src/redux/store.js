import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.jsx"
import CategorySlice from "./slices/CategorySlice.jsx"
import SearchSlice from "./slices/SearchSlice.jsx"

const store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice,
        search: SearchSlice
    }
})
export default store