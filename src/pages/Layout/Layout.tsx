import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";

const Layout = () => {
    return (
        <div className="flex">
            <MenuBar />
            <main className="flex-1 h-screen overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
