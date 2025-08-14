import { EquipamentSet, HydratedEquipamentSet } from '@/models/EquipamentSet';
import EquipamentRepository from '@/repositories/EquipamentRepository';
import EquipamentSetRepository from '@/repositories/EquipamentSetRepository';

export async function hydrateEquipamentSet(
    set: EquipamentSet
): Promise<HydratedEquipamentSet> {
    const equipaments = await Promise.all(
        set.items.map(async item => {
            if (item.equipamentId !== undefined) {
                const equip = await EquipamentRepository.getById(item.equipamentId);
                if (!equip) throw new Error(`Equipament ${item.equipamentId} not found`);
                return equip;
            }
            const child = await EquipamentSetRepository.getById(item.equipamentSetId!);
            if (!child) throw new Error(`EquipamentSet ${item.equipamentSetId} not found`);
            return hydrateEquipamentSet(child);
        })
    );
    return new HydratedEquipamentSet(set.name, equipaments, set.id);
}
