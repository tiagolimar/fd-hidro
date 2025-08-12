import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";

import LevelRepository from "@/repositories/LevelRepository";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_UPDATED_SUCCESS } from "@/constants/messages";

import LevelForm from "./Form";

export default function LevelEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState({ name: "", height: "" });

    useEffect(() => {
        if (id) {
            LevelRepository.getById(Number(id)).then(level => {
                if (level) {
                    setInitialData({ name: level.name, height: String(level.height) });
                }
            });
        }
    }, [id]);

    async function handleSubmit(data: { name: string; height: string }) {
        if (!id) return;
        await LevelRepository.update(Number(id), {
            name: data.name,
            height: Number(data.height),
        });
        toast.success(ENTITY_UPDATED_SUCCESS);
        navigate("/levels");
    }

    return (
        <SectionMain>
            <Toaster />
            <h1 className="font-semibold mb-4">Editar Nível</h1>
            <LevelForm
                initialData={initialData}
                onSubmit={handleSubmit}
                onCancel={() => navigate("/levels")}
            />
        </SectionMain>
    );
}
