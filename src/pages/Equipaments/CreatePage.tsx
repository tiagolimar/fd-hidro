import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Equipament } from "@/models/Equipament";
import EquipamentRepository from "@/repositories/EquipamentRepository";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_ADDED_SUCCESS } from "@/constants/messages";

import EquipamentForm from "./Form";

export default function EquipamentCreatePage() {
    const navigate = useNavigate();

    async function handleSubmit(data: { name: string; abreviation: string; uhc: string }) {
        const equip = new Equipament(data.name, data.abreviation, Number(data.uhc));
        await EquipamentRepository.create(equip);
        toast.success(ENTITY_ADDED_SUCCESS);
        navigate("/equipaments");
    }

    return (
        <SectionMain>
            <Toaster />
            <h1 className="font-semibold mb-4">Adicionar Peça</h1>
            <EquipamentForm
                initialData={{ name: "", abreviation: "", uhc: "" }}
                onSubmit={handleSubmit}
                onCancel={() => navigate("/equipaments")}
            />
        </SectionMain>
    );
}
