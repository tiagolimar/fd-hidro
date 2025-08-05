import { Equipament } from './Equipament';

export class EquipamentSet {
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
}

