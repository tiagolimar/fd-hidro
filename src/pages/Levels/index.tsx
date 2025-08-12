import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Level } from "@/models/Level";
import LevelRepository from "@/repositories/LevelRepository";
import Table from "@/components/Table/Table";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_DELETED_SUCCESS } from "@/constants/messages";

export default function LevelsList() {
    const [levels, setLevels] = useState<Level[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        LevelRepository.getAll().then(setLevels);
    }, []);

    async function handleDelete(id: number) {
        if (!window.confirm("Deseja remover este nível?")) return;
        await LevelRepository.delete(id);
        setLevels(prev => prev.filter(l => l.id !== id));
        toast.success(ENTITY_DELETED_SUCCESS);
    }

    return (
        <SectionMain>
            <Toaster />
            <div className="menu flex justify-between items-center py-4">
                <h1 className="font-semibold">Níveis</h1>
                <button
                    type="button"
                    onClick={() => navigate("new")}
                    className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                    Adicionar Nível
                </button>
            </div>
            <Table
                data={levels}
                onEdit={(id) => navigate(String(id))}
                onDelete={handleDelete}
            />
        </SectionMain>
    );
}
