import type { AppDB } from '@/db/db';
import { EquipamentSet } from '@/models/EquipamentSet';
import { fromEquipamentSet } from '@/dto/equipamentSet';

export async function seedEquipamentSets(db: AppDB) {
    const sets: EquipamentSet[] = [
        new EquipamentSet('WC', [
            { equipamentId: 1 },
            { equipamentId: 2 },
            { equipamentId: 4 },
            { equipamentId: 5 },
        ], 1),
        new EquipamentSet('Lavabo', [
            { equipamentId: 1 },
            { equipamentId: 2 },
            { equipamentId: 4 },
        ], 2),
        new EquipamentSet('Área de Serviço e Cozinha', [
            { equipamentId: 7 },
            { equipamentId: 10 },
            { equipamentId: 9 },
        ], 3),
    ];
    await db.equipamentSets.bulkAdd(sets.map(fromEquipamentSet));
}
