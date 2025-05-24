/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import type AuthModel from "../../../models/auth.model";
import { appApi } from "../../../services/appApiService";
import { onLogin } from "./authSlice";
import type { AuthStateModel } from "../../../models/auth.model";

export const postAuth = (body: AuthModel) => {
    return async function (dispatch: ThunkDispatch<
        { authState: AuthStateModel; }, undefined, AnyAction
    >) {
        try {
            const resp = await appApi.post('/auth/login', body);
            dispatch(onLogin(resp.data));
        } catch (error: any) {

            if (error.response.data.code === 9007) {
                console.log('error en login');

            }
        }
    };
};