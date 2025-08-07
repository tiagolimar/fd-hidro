import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';

import { Equipament } from '@/models/Equipament';
import EquipamentRepository from '@/repositories/EquipamentRepository';
import Table from '@/components/Table/Table';
import ButtonPrimary from '@/components/Table/ButtonPrimary';
import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';

export default function EquipamentsEditor() {
	const [equipaments, setEquipaments] = useState<Equipament[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [newEquipament, setNewEquipament] = useState<Equipament>(new Equipament(0,'0','0',0));
	
	useEffect(() => {
		EquipamentRepository.getAll().then(setEquipaments);
	}, []);
	
	return (
		<section className="container mx-auto pb-4">
			<Toaster />
			<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
					<DialogTitle className="font-bold">Adicionar Peça</DialogTitle>
					<Description>
						<h2>Insira os dados da peça</h2>
						<form onSubmit={(e) => e.preventDefault()}>
							<label htmlFor="name">Nome</label>
							<input type="text" id="name" name="name" value={newEquipament.name} onChange={(e) => setNewEquipament({ ...newEquipament, name: e.target.value })} />
							<label htmlFor="abreviation">Abreviação</label>
							<input type="text" id="abreviation" name="abreviation" value={newEquipament.abreviation} onChange={(e) => setNewEquipament({ ...newEquipament, abreviation: e.target.value })} />
							<label htmlFor="uhc">UHC</label>
							<input type="number" id="uhc" name="uhc" value={newEquipament.uhc} onChange={(e) => setNewEquipament({ ...newEquipament, uhc: Number(e.target.value) })} />
						</form>
					</Description>
					<div className="flex gap-4">
						<button onClick={() => setIsOpen(false)}>Cancelar</button>
						<button onClick={() => EquipamentRepository.create(newEquipament)}>Adicionar</button>
					</div>
				</DialogPanel>
				</div>
			</Dialog>
			<div className="menu flex justify-between items-center py-4">
				<h1>Menu de Edição de Peças Hidráulicas</h1>
				<ButtonPrimary onClick={() => setIsOpen(true)} />
			</div>
			<Table data={equipaments} />
		</section>
	);
}


