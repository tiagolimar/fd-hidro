import { EquipamentSet } from '@/models/EquipamentSet';
import { Equipament } from '@/models/Equipament';
import { toEquipament, fromEquipament, type EquipamentDTO } from './equipament';

export interface EquipamentSetDTO {
  id?: number;
  name: string;
  equipaments: Array<EquipamentDTO | EquipamentSetDTO>;
}

export function toEquipamentSet(dto: EquipamentSetDTO): EquipamentSet {
  const equipaments = dto.equipaments.map(item =>
    'equipaments' in item
      ? toEquipamentSet(item as EquipamentSetDTO)
      : toEquipament(item as EquipamentDTO)
  );
  return new EquipamentSet(dto.id ?? 0, dto.name, equipaments);
}

export function fromEquipamentSet(model: EquipamentSet): EquipamentSetDTO {
  const equipaments = model.equipaments.map(item =>
    item instanceof EquipamentSet
      ? fromEquipamentSet(item)
      : fromEquipament(item as Equipament)
  );
  return { id: model.id, name: model.name, equipaments };
}
