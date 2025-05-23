import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthStateModel } from "../../../models/auth.model";
import { AuthEmun } from "../../../enums/authEnum";

const initialState: AuthStateModel = {
    token: '',
    isAuthenticated: false,
    username: '',
};


export const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        onLogin: (state, action: PayloadAction<AuthStateModel>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.username = action.payload.username;
            localStorage.setItem(AuthEmun.token, action.payload.token);
        },

        onLogout: (state) => {
            state.token = '';
            state.isAuthenticated = false;
            state.username = '';
            localStorage.removeItem(AuthEmun.token);
        },
    },
});

export const {
    onLogin,
    onLogout
} = AuthSlice.actions;