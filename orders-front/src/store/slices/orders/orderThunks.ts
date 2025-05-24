import type { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import type { OrderModel, OrderStateModel } from "../../../models/orders.model";
import { AuthEmun } from "../../../enums/authEnum";
import { appApi } from "../../../services/appApiService";
import { onSaveOrder } from "./orderSlice";
import { AppAlert } from "../../../components/AppAlert/AppAlert";

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
            return true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
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
                new AppAlert('Se a creado exitosamente la orden.', 1);
                return true;
            } catch (error: any) {
            }
        };
};