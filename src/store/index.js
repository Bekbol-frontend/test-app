import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import cart from "./cart";

const store = configureStore({
    reducer: {
        products,
        cart
    }
})

export default store