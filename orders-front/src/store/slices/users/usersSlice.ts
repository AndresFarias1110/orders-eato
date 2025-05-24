import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { UserModel, UserStateModel } from "../../../models/users.model";

const initialState: UserStateModel = {
    usersList: [],
};


export const usersSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        onAddUsers: (state, action: PayloadAction<UserModel[]>) => {
            state.usersList = action.payload
        },
    },
});

export const {
    onAddUsers,
} = usersSlice.actions;