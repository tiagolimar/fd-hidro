import { Equipament } from '@/models/Equipament';

export interface EquipamentDTO {
  id?: number;
  name: string;
  abreviation: string;
  uhc: number;
}

export function toEquipament(dto: EquipamentDTO): Equipament {
  return new Equipament(dto.id, dto.name, dto.abreviation, dto.uhc);
}

export function fromEquipament(model: Equipament): EquipamentDTO {
  return {
    id: model.id,
    name: model.name,
    abreviation: model.abreviation,
    uhc: model.uhc,
  };
}
