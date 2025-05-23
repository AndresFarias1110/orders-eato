import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/auth/authSlice";
import { usersSlice } from "./slices/users/usersSlice";

export const store = configureStore({
    reducer: {
        authState: AuthSlice.reducer,
        userState: usersSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;