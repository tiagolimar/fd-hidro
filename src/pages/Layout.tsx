import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <li className="list-none flex gap-4 justify-evenly bg-stone-300 text-bold">
                    <ul><Link to="">Home</Link></ul>
                    <ul><Link to="contact">Contatos</Link></ul>
                    <ul><Link to="blogs">Blog</Link></ul>
                </li>
            </nav>
            <Outlet />
            <div>Footer</div>
        </>
    );
};

export default Layout;
