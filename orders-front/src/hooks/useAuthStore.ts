import { onLogout } from "../store/slices/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./hooks"

export const useAuthStore = () => {
    const { token, isAuthenticated } = useAppSelector(
        state => state.authState,
    );

    const dispatch = useAppDispatch();

    const checkAuthToken = () => {
        if (token) {
            console.log('logeado checkAuthToken');
        }
    };

    const startLogout = () => {
        dispatch(onLogout());
    };

    return {
        isAuthenticated,
        token,
        
        checkAuthToken,
        startLogout,
    };
}