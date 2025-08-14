import type { AppDB } from '@/db/db';
import { EquipamentSet } from '@/models/EquipamentSet';
import { EquipamentSetItem } from '@/models/EquipamentSetItem';
import { fromEquipamentSet } from '@/dto/equipamentSet';

export async function seedEquipamentSets(db: AppDB) {
    const sets: EquipamentSet[] = [
        new EquipamentSet('WC', [
            new EquipamentSetItem(1, 1),
            new EquipamentSetItem(2, 1),
            new EquipamentSetItem(4, 1),
            new EquipamentSetItem(5, 1),
        ], 1),
        new EquipamentSet('Lavabo', [
            new EquipamentSetItem(1, 1),
            new EquipamentSetItem(2, 1),
            new EquipamentSetItem(4, 1),
        ], 2),
        new EquipamentSet('Área de Serviço e Cozinha', [
            new EquipamentSetItem(7, 1),
            new EquipamentSetItem(10, 1),
            new EquipamentSetItem(9, 1),
        ], 3),
    ];
    await db.equipamentSets.bulkAdd(sets.map(fromEquipamentSet));
}
