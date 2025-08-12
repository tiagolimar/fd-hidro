import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";

import EquipamentRepository from "@/repositories/EquipamentRepository";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_UPDATED_SUCCESS } from "@/constants/messages";

import EquipamentForm from "./Form";

export default function EquipamentEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState({ name: "", abreviation: "", uhc: "" });

    useEffect(() => {
        if (id) {
            EquipamentRepository.getById(Number(id)).then(equip => {
                if (equip) {
                    setInitialData({ name: equip.name, abreviation: equip.abreviation, uhc: String(equip.uhc) });
                }
            });
        }
    }, [id]);

    async function handleSubmit(data: { name: string; abreviation: string; uhc: string }) {
        if (!id) return;
        await EquipamentRepository.update(Number(id), {
            name: data.name,
            abreviation: data.abreviation,
            uhc: Number(data.uhc),
        });
        toast.success(ENTITY_UPDATED_SUCCESS);
        navigate("/equipaments");
    }

    return (
        <SectionMain>
            <Toaster />
            <h1 className="font-semibold mb-4">Editar Peça</h1>
            <EquipamentForm
                initialData={initialData}
                onSubmit={handleSubmit}
                onCancel={() => navigate("/equipaments")}
            />
        </SectionMain>
    );
}
