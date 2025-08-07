import { Level } from './Level';
import { Equipament } from './Equipament';
import { EquipamentSet } from './EquipamentSet';
import type { IElement } from './InterfaceElement';

export class Contribution implements IElement {
  constructor(
    public id: number,
    public level: Level,
    public equipament: Equipament | EquipamentSet
  ) {}

  get totaluhc(): number {
    return this.equipament instanceof EquipamentSet
      ? this.equipament.totaluhc
      : this.equipament.uhc;
  }

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id,
      Nível: this.level.name,
      Equipamento: this.equipament.name,
      UHC: this.totaluhc,
    };
  }
}

