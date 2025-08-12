import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Level } from "@/models/Level";
import LevelRepository from "@/repositories/LevelRepository";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_ADDED_SUCCESS } from "@/constants/messages";

import EntityForm from "@/components/forms/EntityForm";

export default function LevelCreatePage() {
    const navigate = useNavigate();

    async function handleSubmit(data: { name: string; height: string }) {
        const level = new Level(data.name, Number(data.height));
        await LevelRepository.create(level);
        toast.success(ENTITY_ADDED_SUCCESS);
        navigate(-1);
    }

    return (
        <SectionMain>
            <Toaster />
            <h1 className="font-semibold mb-4">Adicionar Nível</h1>
            <EntityForm
                initialValues={{ name: "", height: "" }}
                onSubmit={handleSubmit}
            />
        </SectionMain>
    );
}
