import { Navigate, Outlet } from "react-router"
import { AuthEmun } from "../../enums/authEnum";
import { useAuthStore } from "../../hooks/useAuthStore";

const ProtectedRoute = ({
    isAllowed,
    redirectTo = "/login",
    children,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
    const { startLogout } = useAuthStore();

    const auth = localStorage.getItem(AuthEmun.token);

    if (!auth) {
        startLogout();
    }

    if (!isAllowed && auth) {
        redirectTo = '/';
    }

    return !isAllowed ? (
        <Navigate to={redirectTo} replace />
    ) : children ? (
        children
    ) : (
        <Outlet />
    );
};

export default ProtectedRoute;