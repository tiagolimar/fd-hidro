export interface ContributionDTO {
  id?: number;
  levelId: number;
  equipamentId?: number;
  equipamentSetId?: number;
}

import { Contribution, HydratedContribution } from '@/models/Contribution';
import { Level } from '@/models/Level';
import { Equipament } from '@/models/Equipament';
import { EquipamentSet, HydratedEquipamentSet } from '@/models/EquipamentSet';
import { toLevel, fromLevel, type LevelDTO } from './level';
import { toEquipament, fromEquipament, type EquipamentDTO } from './equipament';
import {
    toEquipamentSet,
    fromEquipamentSet,
    type EquipamentSetDTO,
} from './equipamentSet';

export function toContribution(dto: ContributionDTO): Contribution {
    return new Contribution(
        dto.levelId,
        dto.equipamentId,
        dto.equipamentSetId,
        dto.id,
    );
}

export function fromContribution(model: Contribution): ContributionDTO {
    return {
        id: model.id,
        levelId: model.levelId,
        equipamentId: model.equipamentId,
        equipamentSetId: model.equipamentSetId,
    };
}

export interface HydratedContributionDTO {
  id: number;
  level: LevelDTO;
  equipament: EquipamentDTO | EquipamentSetDTO;
}

export function toHydratedContribution(
    dto: HydratedContributionDTO,
): HydratedContribution {
    const level: Level = toLevel(dto.level);
    const equipament: Equipament | EquipamentSet =
    'items' in dto.equipament
        ? toEquipamentSet(dto.equipament as EquipamentSetDTO)
        : toEquipament(dto.equipament as EquipamentDTO);
    return new HydratedContribution(level, equipament as Equipament | HydratedEquipamentSet, dto.id);
}

export function fromHydratedContribution(
    model: HydratedContribution,
): HydratedContributionDTO {
    const equipament =
        model.equipament instanceof HydratedEquipamentSet
            ? fromEquipamentSet(
                new EquipamentSet(
                    model.equipament.name,
                    model.equipament.equipaments.map(item =>
                        item instanceof HydratedEquipamentSet
                            ? { equipamentSetId: item.id }
                            : { equipamentId: (item as Equipament).id }
                    ),
                    model.equipament.id
                )
            )
            : fromEquipament(model.equipament as Equipament);
    return {
        id: model.id!,
        level: fromLevel(model.level),
        equipament,
    };
}
