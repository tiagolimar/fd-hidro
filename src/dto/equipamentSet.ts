import { EquipamentSet } from '@/models/EquipamentSet';
import { EquipamentSetItem } from '@/models/EquipamentSetItem';

export interface EquipamentSetItemDTO {
  equipamentId: number;
  quantity: number;
}

export interface EquipamentSetDTO {
  id?: number;
  name: string;
  items: EquipamentSetItemDTO[];
}

export function toEquipamentSet(dto: EquipamentSetDTO): EquipamentSet {
    return new EquipamentSet(
        dto.name,
        dto.items?.map(i => new EquipamentSetItem(i.equipamentId, i.quantity)),
        dto.id,
    );
}

export function fromEquipamentSet(model: EquipamentSet): EquipamentSetDTO {
    return {
        id: model.id,
        name: model.name,
        items: model.items.map(i => ({ equipamentId: i.equipamentId, quantity: i.quantity })),
    };
}
