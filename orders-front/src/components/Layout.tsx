import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="mb-3 p-4">
                <Outlet />
            </div>
        </>
    );
}