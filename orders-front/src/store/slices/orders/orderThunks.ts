import type { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import type { OrderModel, OrderStateModel } from "../../../models/orders.model";
import { AuthEmun } from "../../../enums/authEnum";
import { appApi } from "../../../services/appApiService";
import { onSaveOrder } from "./orderSlice";

export const getApiOrders = () => {
    return async function (dispatch: ThunkDispatch<
        { orderState: OrderStateModel; }, undefined, AnyAction
    >) {
        try {

            const token = localStorage.getItem(AuthEmun.token);
            const resp = await appApi.get('/orders', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch(onSaveOrder(resp.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {

            if (error.response?.data.code === 9007) {
                console.log('error en login');

            }
        }
    };
};

export const postApiOrders = (body: OrderModel) => {
    return async function () {
            try {
                const token = localStorage.getItem(AuthEmun.token);
                await appApi.post('/orders', body, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            } catch (error: any) {
    
                if (error.response.data.code === 9007) {
                    console.log('error en login');
    
                }
            }
        };
};