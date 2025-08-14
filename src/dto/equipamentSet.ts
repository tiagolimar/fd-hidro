import { EquipamentSet } from '@/models/EquipamentSet';

export interface EquipamentSetItemDTO {
  equipamentId?: number;
  equipamentSetId?: number;
}

export interface EquipamentSetDTO {
  id?: number;
  name: string;
  items: EquipamentSetItemDTO[];
}

export function toEquipamentSet(dto: EquipamentSetDTO): EquipamentSet {
    return new EquipamentSet(dto.name, dto.items, dto.id);
}

export function fromEquipamentSet(model: EquipamentSet): EquipamentSetDTO {
    return { id: model.id, name: model.name, items: model.items };
}
