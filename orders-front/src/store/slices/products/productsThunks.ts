import type { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import type { ProductStateModel } from "../../../models/product.model";
import { AuthEmun } from "../../../enums/authEnum";
import { appApi } from "../../../services/appApiService";
import { onSaveProducts } from "./productsSlice";

export const getApiProducts = () => {
    return async function (dispatch: ThunkDispatch<
        { productState: ProductStateModel; }, undefined, AnyAction
    >) {
        try {

            const token = localStorage.getItem(AuthEmun.token);
            const resp = await appApi.get('/products', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch(onSaveProducts(resp.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {

            if (error.response?.data.code === 9007) {
                console.log('error en login');

            }
        }
    };
};