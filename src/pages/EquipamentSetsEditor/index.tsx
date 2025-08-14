import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import type { HydratedEquipamentSet } from "@/models/EquipamentSet";
import EquipamentSetRepository from "@/repositories/EquipamentSetRepository";
import { hydrateEquipamentSet } from "@/utils/hydrateEquipamentSet";
import Table from "@/components/Table/Table";
import SectionMain from "@/components/SectionMain/SectionMain";

export default function EquipamentSetsEditor() {
    const [equipamentSets, setEquipamentSets] = useState<HydratedEquipamentSet[]>([]);
	
    useEffect(() => {
        EquipamentSetRepository.getAll().then(async sets => {
            const hydrated = await Promise.all(sets.map(hydrateEquipamentSet));
            setEquipamentSets(hydrated);
        });
    }, []);
	
    return (
        <SectionMain>
            <Toaster />
            <h1 className="my-4">Conjunto de Peças</h1>
            <Table data={equipamentSets} />
        </SectionMain>
    )
}