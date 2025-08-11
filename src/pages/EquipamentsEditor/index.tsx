import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';

import { Equipament } from '@/models/Equipament';
import EquipamentRepository from '@/repositories/EquipamentRepository';
import Table from '@/components/Table/Table';
import EntityFormDialog, { type FieldConfig } from '@/components/EntityFormDialog/EntityFormDialog';
import SectionMain from '@/components/SectionMain/SectionMain';
import { ENTITY_ADDED_SUCCESS } from '@/constants/messages';

export default function EquipamentsEditor() {
    const [equipaments, setEquipaments] = useState<Equipament[]>([]);

    useEffect(() => {
        EquipamentRepository.getAll().then(setEquipaments);
    }, []);

    const fields: FieldConfig[] = [
        { name: 'name', label: 'Nome', type: 'text' },
        { name: 'abreviation', label: 'Abreviação', type: 'text' },
        { name: 'uhc', label: 'UHC', type: 'number', step: '1' },
    ];

    async function handleCreate(data: Record<string, string>) {
        const equip = new Equipament(
            data.name,
            data.abreviation,
            Number(data.uhc)
        );
        const created = await EquipamentRepository.create(equip);
        setEquipaments(prev => [...prev, created]);
        toast.success(ENTITY_ADDED_SUCCESS);
    }

    return (
        <SectionMain>
            <Toaster />
            <div className="menu flex justify-between items-center py-4">
                <h1 className="font-semibold">Peças</h1>
                <EntityFormDialog title="Adicionar Peça" fields={fields} onSubmit={handleCreate} />
            </div>
            <Table data={equipaments} />
        </SectionMain>
    );
}
