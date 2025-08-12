import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Equipament } from "@/models/Equipament";
import EquipamentRepository from "@/repositories/EquipamentRepository";
import Table from "@/components/Table/Table";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_DELETED_SUCCESS } from "@/constants/messages";

export default function EquipamentsListPage() {
    const [equipaments, setEquipaments] = useState<Equipament[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        EquipamentRepository.getAll().then(setEquipaments);
    }, []);

    async function handleDelete(id: number) {
        if (!window.confirm("Deseja remover esta peça?")) return;
        await EquipamentRepository.delete(id);
        setEquipaments(prev => prev.filter(e => e.id !== id));
        toast.success(ENTITY_DELETED_SUCCESS);
    }

    return (
        <SectionMain>
            <Toaster />
            <div className="menu flex justify-between items-center py-4">
                <h1 className="font-semibold">Peças</h1>
                <button
                    type="button"
                    onClick={() => navigate("new")}
                    className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                    Adicionar Peça
                </button>
            </div>
            <Table
                data={equipaments}
                onEdit={(id) => navigate(String(id))}
                onDelete={handleDelete}
            />
        </SectionMain>
    );
}
