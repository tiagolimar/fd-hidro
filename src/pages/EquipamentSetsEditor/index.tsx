import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import type { EquipamentSet } from "@/models/EquipamentSet";
import EquipamentSetRepository from "@/repositories/EquipamentSetRepository";
import Table from "@/components/Table/Table";
import SectionMain from "@/components/SectionMain/SectionMain";

export default function EquipamentSetsEditor() {
	const [equipamentSets, setEquipamentSets] = useState<EquipamentSet[]>([]);
	
	useEffect(() => {
		EquipamentSetRepository.getAll().then(setEquipamentSets);
	}, []);
	
	return (
		<SectionMain>
			<Toaster />
			<h1 className="my-4">Conjunto de Peças</h1>
			<Table data={equipamentSets} />
		</SectionMain>
	)
}