import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Equipament } from "@/models/Equipament";
import EquipamentRepository from "@/repositories/EquipamentRepository";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_ADDED_SUCCESS, ENTITY_UPDATED_SUCCESS } from "@/constants/messages";

export default function EquipamentForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", abreviation: "", uhc: "" });

    useEffect(() => {
        if (id) {
            EquipamentRepository.getById(Number(id)).then(equip => {
                if (equip) {
                    setData({ name: equip.name, abreviation: equip.abreviation, uhc: String(equip.uhc) });
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
            await EquipamentRepository.update(Number(id), {
                name: data.name,
                abreviation: data.abreviation,
                uhc: Number(data.uhc),
            });
            toast.success(ENTITY_UPDATED_SUCCESS);
        } else {
            const equip = new Equipament(data.name, data.abreviation, Number(data.uhc));
            await EquipamentRepository.create(equip);
            toast.success(ENTITY_ADDED_SUCCESS);
        }
        navigate("/equipaments");
    }

    return (
        <SectionMain>
            <Toaster />
            <h1 className="font-semibold mb-4">{id ? "Editar Peça" : "Adicionar Peça"}</h1>
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
                    <label htmlFor="abreviation" className="text-sm font-medium">Abreviação</label>
                    <input
                        id="abreviation"
                        name="abreviation"
                        type="text"
                        value={data.abreviation}
                        onChange={handleChange}
                        className="rounded border p-2"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="uhc" className="text-sm font-medium">UHC</label>
                    <input
                        id="uhc"
                        name="uhc"
                        type="number"
                        step="1"
                        value={data.uhc}
                        onChange={handleChange}
                        className="rounded border p-2"
                        required
                    />
                </div>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => navigate("/equipaments")}
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
