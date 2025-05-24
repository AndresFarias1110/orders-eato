import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductStateModel } from "../../../models/product.model";

const initialState: ProductStateModel = {
    productList: [],
};

export const productSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        onSaveProducts: (state, action: PayloadAction<Product[]>) => {
            state.productList = action.payload;
        },
    },
});

export const { onSaveProducts } = productSlice.actions;