import { Link } from 'react-router-dom'

function ItemMenu({src, link, icon}: {src: string, link: string, icon: string}) {
    return (
        <Link to={link}>
            <ul className="flex gap-2 items-center ps-4 hover:bg-stone-200 py-2">
                <img src={src} alt="" width={24} />
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
                    <ItemMenu src="https://img.icons8.com/windows/32/home.png" link="" icon="Home" />
                    <hr />
                    <ItemMenu src="https://img.icons8.com/ios/50/toilet-bowl.png" link="equipamentos" icon="Peças Hidráulicas" />
                    <ItemMenu src="https://img.icons8.com/external-others-inmotus-design/67/external-Floor-contour-others-inmotus-design.png" link="conjuntos" icon="Conjuntos de Peças" />
                    <ItemMenu src="https://img.icons8.com/ios/50/building.png" link="pavimentos" icon="Pavimentos" />
                    <ItemMenu src="https://img.icons8.com/ios/50/water-pipe.png" link="prumadas" icon="Prumadas" />
                    <hr />
                    <ItemMenu src="https://img.icons8.com/ios/50/google-sheets.png" link="memorial" icon="Memorial" />
                </li>
            </nav>
        </aside>
    )
}

export default MenuBar