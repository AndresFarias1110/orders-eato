import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { OrderModel, OrderStateModel } from "../../../models/orders.model";

const initialState: OrderStateModel = {
    orderList: [],
};

export const orderSlice = createSlice({
    name: 'OrderSlice',
    initialState,
    reducers: {
        onSaveOrder: (state, action: PayloadAction<OrderModel[]>) => {
            state.orderList = action.payload;
        },
    },
});

export const { onSaveOrder } = orderSlice.actions;