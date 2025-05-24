import { Route, Routes } from "react-router";
import Login from "../pages/Auth/Login";
import Layout from "../components/Layout";
import ProtectedRoute from "../pages/Auth/ProtectedRoute";
import { Home } from "../pages/home/Home";
import { useAuthStore } from "../hooks/useAuthStore";
import { AuthEmun } from "../enums/authEnum";

const AppRoutes = () => {
    const { isAuthenticated } = useAuthStore();
    const auth = localStorage.getItem(AuthEmun.token);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Layout />} >
                <Route element={<ProtectedRoute isAllowed={isAuthenticated || auth} />} >
                    <Route index element={<Home />} />
                </Route>

            </Route>
        </Routes>
    );
};

export default AppRoutes;