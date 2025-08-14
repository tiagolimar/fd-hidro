import { Contribution, HydratedContribution } from '@/models/Contribution';
import LevelRepository from '@/repositories/LevelRepository';
import EquipamentRepository from '@/repositories/EquipamentRepository';
import EquipamentSetRepository from '@/repositories/EquipamentSetRepository';
import { hydrateEquipamentSet } from './hydrateEquipamentSet';

export async function hydrateContribution(
    contribution: Contribution
): Promise<HydratedContribution> {
    const level = await LevelRepository.getById(contribution.levelId);
    if (!level) {
        throw new Error(`Level ${contribution.levelId} not found`);
    }

    const equipament =
    contribution.equipamentId !== undefined
        ? await EquipamentRepository.getById(contribution.equipamentId)
        : await (async () => {
            const set = await EquipamentSetRepository.getById(
                contribution.equipamentSetId!
            );
            return set ? await hydrateEquipamentSet(set) : undefined;
        })();
    if (!equipament) {
        throw new Error(
            `Equipament ${
                contribution.equipamentId ?? contribution.equipamentSetId
            } not found`
        );
    }

    return new HydratedContribution(level, equipament, contribution.id);
}
