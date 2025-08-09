import { Contribution, HydratedContribution } from '@/models/Contribution';
import LevelRepository from '@/repositories/LevelRepository';
import EquipamentRepository from '@/repositories/EquipamentRepository';
import EquipamentSetRepository from '@/repositories/EquipamentSetRepository';

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
      : await EquipamentSetRepository.getById(contribution.equipamentSetId!);
  if (!equipament) {
    throw new Error(
      `Equipament ${
        contribution.equipamentId ?? contribution.equipamentSetId
      } not found`
    );
  }

  return new HydratedContribution(level, equipament, contribution.id);
}
