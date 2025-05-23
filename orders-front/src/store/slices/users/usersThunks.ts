import type { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import type { UserStateModel } from "../../../models/users.model";
import { appApi } from "../../../services/appApiService";
import { onAddUsers } from "./usersSlice";
import { AuthEmun } from "../../../enums/authEnum";

export const getApiUsers = () => {
    
    return async function (dispatch: ThunkDispatch<
        { userState: UserStateModel; }, undefined, AnyAction
    >) {
        try {
            const token = localStorage.getItem(AuthEmun.token);
            const resp = await appApi.get('/api/user/retrieve', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch(onAddUsers(resp.data.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {

            if (error.response?.data.code === 9007) {
                console.log('error en login');

            }
        }
    }; 
};
