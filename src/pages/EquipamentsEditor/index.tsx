import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import type { Equipament } from '@/models/Equipament';
import EquipamentRepository from '@/repositories/EquipamentRepository';
import Table from '@/components/Table/Table';

export default function EquipamentsEditor() {
	const [equipaments, setEquipaments] = useState<Equipament[]>([]);
	
	useEffect(() => {
		EquipamentRepository.getAll().then(setEquipaments);
	}, []);
	
	return (
		<section className="container mx-auto pb-4">
		<Toaster />
		<h1 className="my-4">Menu de Edição de Peças Hidráulicas</h1>
		<Table data={equipaments} />
		</section>
	);
}


