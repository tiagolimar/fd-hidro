import useSWR from "swr";
import axios from "axios";

function Usuarios() {
    const fetcher = (url: string) => axios.get(url).then(res => res.data);
    const {data, error, isLoading} = useSWR("https://jsonplaceholder.typicode.com/users",fetcher)

    if (error) return <div>Erro ao carregar os dados</div>
    if (isLoading) return <div>Carregando...</div>

    return (
        <div className="container bg-stone-300">
            {data.map((user : object, key:number)=>(
                <h1 key={key} className="text-center font-bold text-3xl">{user.name}</h1>
            ))}
        </div>
    )
}

export default Usuarios