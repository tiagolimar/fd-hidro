import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";

const Layout = () => {
    return (
        <main className="flex">
            <MenuBar />
            <Outlet />
        </main>
    );
};

export default Layout;
