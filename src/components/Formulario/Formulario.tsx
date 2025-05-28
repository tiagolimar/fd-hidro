import { useEffect, useState } from "react";
import Field from "./Field";
// import Container from '../Container';

function Formulario(props: { title: string }) {
    const { title } = props;
    const [data, setData] = useState({
        name:"Fulano",
        email:"fulano@email.com",
        password:"",
        cep:"",
        localidade:"",
        logradouro:"",
        regiao:"",
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(data);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setData({
            ...data,
            [event.target.id]: event.target.value
        });

        if (event.target.id === "cep" && event.target.value.length === 8){
            fetch(`https://viacep.com.br/ws/${event.target.value}/json/`)
                .then((response) => response.json())
                .then((cepData) => {
                    setData({
                        ...data,
                        localidade: cepData.localidade,
                        logradouro: cepData.logradouro,
                        regiao: cepData.uf
                    });
                })
                .catch((error) => console.error("Erro ao buscar CEP:", error));
        }

        console.log(data)
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="container mx-auto bg-stone-100 mt-5 p-4 rounded shadow"
        >
            <h1 className="text-center text-2xl">{title}</h1>
            <div className="border shadow-lg p-4 rounded-lg border-stone-300">
                <Field type="text" value={data.name} onChange={(e)=>handleChange(e)} name="name" />
                <Field type="email" value={data.email} onChange={(e)=>handleChange(e)} name="email" />
                <Field type="password" value={data.password} onChange={(e)=>handleChange(e)} name="password" />
                <Field type="text" value={data.cep} onChange={(e)=>handleChange(e)} name="cep" />
                <Field type="text" value={data.localidade} onChange={(e)=>handleChange(e)} name="localidade" />
                <Field type="text" value={data.logradouro} onChange={(e)=>handleChange(e)} name="logradouro" />
                <Field type="text" value={data.regiao} onChange={(e)=>handleChange(e)} name="regiao" />
                <button className="bg-violet-300 w-1/3">Enviar Dados</button>
            </div>
        </form>
    );
}

export default Formulario;
