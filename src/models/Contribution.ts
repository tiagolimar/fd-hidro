import type { IElement } from './InterfaceElement';
import { Level } from './Level';
import { Equipament } from './Equipament';
import { EquipamentSet } from './EquipamentSet';

export class Contribution {
  constructor(
    public levelId: number,
    public equipamentId?: number,
    public equipamentSetId?: number,
    public id?: number
  ) {}
}

export class HydratedContribution implements IElement {
  constructor(
    public level: Level,
    public equipament: Equipament | EquipamentSet,
    public id?: number
  ) {}

  get totaluhc(): number {
    return this.equipament instanceof EquipamentSet
      ? this.equipament.totaluhc
      : this.equipament.uhc;
  }

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id ?? '',
      Nível: this.level.name,
      Equipamento: this.equipament.name,
      UHC: this.totaluhc,
    };
  }
}
