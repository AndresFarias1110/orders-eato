import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/auth/authSlice";
import { usersSlice } from "./slices/users/usersSlice";
import { orderSlice } from "./slices/orders/orderSlice";
import { productSlice } from "./slices/products/productsSlice";

export const store = configureStore({
    reducer: {
        authState: AuthSlice.reducer,
        userState: usersSlice.reducer,
        orderState: orderSlice.reducer,
        productState: productSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;