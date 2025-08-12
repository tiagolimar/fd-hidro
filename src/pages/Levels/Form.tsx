import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Level } from "@/models/Level";
import LevelRepository from "@/repositories/LevelRepository";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_ADDED_SUCCESS, ENTITY_UPDATED_SUCCESS } from "@/constants/messages";

export default function LevelForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", height: "" });

    useEffect(() => {
        if (id) {
            LevelRepository.getById(Number(id)).then(level => {
                if (level) {
                    setData({ name: level.name, height: String(level.height) });
                }
            });
        }
    }, [id]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (id) {
            await LevelRepository.update(Number(id), {
                name: data.name,
                height: Number(data.height),
            });
            toast.success(ENTITY_UPDATED_SUCCESS);
        } else {
            const level = new Level(data.name, Number(data.height));
            await LevelRepository.create(level);
            toast.success(ENTITY_ADDED_SUCCESS);
        }
        navigate("/levels");
    }

    return (
        <SectionMain>
            <Toaster />
            <h1 className="font-semibold mb-4">{id ? "Editar Nível" : "Adicionar Nível"}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium">Nome</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={handleChange}
                        className="rounded border p-2"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="height" className="text-sm font-medium">Altura</label>
                    <input
                        id="height"
                        name="height"
                        type="number"
                        step="any"
                        value={data.height}
                        onChange={handleChange}
                        className="rounded border p-2"
                        required
                    />
                </div>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => navigate("/levels")}
                        className="px-4 py-2 rounded border"
                    >
                        Cancelar
                    </button>
                    <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                        Salvar
                    </button>
                </div>
            </form>
        </SectionMain>
    );
}
