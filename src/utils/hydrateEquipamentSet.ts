import { EquipamentSet, HydratedEquipamentSet } from '@/models/EquipamentSet';
import EquipamentRepository from '@/repositories/EquipamentRepository';

export async function hydrateEquipamentSet(
    set: EquipamentSet,
): Promise<HydratedEquipamentSet> {
    const items = await Promise.all(
        set.items.map(async item => {
            const equip = await EquipamentRepository.getById(item.equipamentId);
            if (!equip) {
                throw new Error(`Equipament ${item.equipamentId} not found`);
            }
            return { equipament: equip, quantity: item.quantity };
        }),
    );
    return new HydratedEquipamentSet(set.name, items, set.id);
}
