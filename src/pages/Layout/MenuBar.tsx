import React from 'react'
import { Link } from 'react-router-dom'

function ItemMenu({link, icon}: {link: string, icon: string}) {
    return (
        <Link to={link}>
            <ul className="flex gap-2 items-center ps-4 hover:bg-stone-200 py-2">
                <img src="https://img.icons8.com/?size=100&id=4819&format=png&color=000000" alt="" width={24} />
                <span className="text-bold">{icon}</span>
            </ul>
        </Link>
    )
}

function MenuBar() {
    return (
        <aside className="max-w-[300px] min-w-[200px] min-h-screen bg-blue-100">
            <nav>
                <li className="list-none flex flex-col text-center justify-evenly bg-stone-300 text-bold">
                    <ItemMenu link="" icon="Home" />
                    <ItemMenu link="pecas" icon="Peças Hidráulicas" />
                    <ItemMenu link="conjuntos" icon="Conjuntos de Peças" />
                </li>
            </nav>
        </aside>
    )
}

export default MenuBar