import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../client";

export const getProducts = createAsyncThunk("products/getProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await api.get('/products');
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const putProduct = createAsyncThunk("products/putProduct", async (data, { rejectWithValue, dispatch }) => {
    try {
        const response = await api.put(`/products/${data.id}`, data);
        if (response.status === 200) {
            dispatch(putProductReducer(data))
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState = {
    products: [],
    loading: null,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        putProductReducer: (state, { payload }) => {
            const findProductIndex = state.products.findIndex(product => product.id === payload.id)
            state.products[findProductIndex] = payload
        }
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = "pending";
            state.error = null
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            state.loading = "fulfilled";
            state.error = null
            state.products = payload;
        },
        [getProducts.rejected]: (state, { payload }) => {
            state.loading = "rejected";
            state.error = payload
        },

        [putProduct.pending]: (state) => {
            state.loading = "pending_cart";
            state.error = null;
        },
        [putProduct.fulfilled]: (state) => {
            state.loading = "fulfilled";
            state.error = null;
        },
        [putProduct.rejected]: (state, { payload }) => {
            state.loading = "rejected";
            state.error = payload;
        }
    }
})

export default productsSlice.reducer
export const { putProductReducer } = productsSlice.actions