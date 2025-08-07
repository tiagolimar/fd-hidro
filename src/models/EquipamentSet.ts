import { Equipament } from './Equipament';
import type { IElement } from './InterfaceElement';

export class EquipamentSet implements IElement {
  constructor(
    public id: number,
    public name: string,
    public equipaments: Array<Equipament | EquipamentSet> = []
  ) {}

  get totaluhc(): number {
    return this.equipaments.reduce((sum, item) => {
      if (item instanceof EquipamentSet) {
        return sum + item.totaluhc;
      }
      return sum + item.uhc;
    }, 0);
  }

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id,
      Nome: this.name,
      'UHC Total': this.totaluhc,
    };
  }
}

