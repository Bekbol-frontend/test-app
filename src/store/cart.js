import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../client"

export const getCartProducts = createAsyncThunk("cart/getCartProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await api.get("/cart");
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const addToCart = createAsyncThunk("cart/addToCart", async (product, { rejectWithValue, dispatch }) => {
    try {
        const response = await api.post("/cart", product);
        if (response.status === 201) {
            dispatch(addToCartReducer(response.data))
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteProduct = createAsyncThunk("cart/deleteProduct", async (id, { rejectWithValue, dispatch }) => {
    try {
        const response = await api.delete(`/cart/${id}`);
        console.log(response);
        dispatch(deleteProductResponse(id))
    } catch (error) {
        return rejectWithValue(error.message)
    }
});

const initialState = {
    visible: false,
    cart: [],
    loading: null,
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        handleVisible: (state) => {
            state.visible = !state.visible
        },
        addToCartReducer: (state, { payload }) => {
            state.cart = [...state.cart, payload]
        },
        deleteProductResponse: (state, { payload }) => {
            state.cart = state.cart.filter(product => product.id !== payload)
        }
    },
    extraReducers: {
        [getCartProducts.pending]: (state) => {
            state.loading = "pending";
            state.error = null
        },
        [getCartProducts.fulfilled]: (state, { payload }) => {
            state.loading = "pending";
            state.error = null
            state.cart = payload
        },
        [getCartProducts.rejected]: (state, { payload }) => {
            state.loading = "rejected";
            state.error = payload
        },

        [addToCart.pending]: (state) => {
            state.loading = "pending"
            state.error = null
        },
        [addToCart.fulfilled]: (state) => {
            state.loading = "fulfilled"
            state.error = null
        },
        [addToCart.rejected]: (state, { payload }) => {
            state.loading = "rejected"
            state.error = payload
        },
    }
})

export default cartSlice.reducer

export const { handleVisible, addToCartReducer, deleteProductResponse } = cartSlice.actions