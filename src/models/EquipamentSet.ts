import { Equipament } from './Equipament';
import type { IElement, TableCell } from './InterfaceElement';

export class EquipamentSet {
    constructor(
    public name: string,
    public items: { equipamentId?: number; equipamentSetId?: number }[] = [],
    public id?: number
    ) {}
}

export class HydratedEquipamentSet implements IElement {
    constructor(
    public name: string,
    public equipaments: Array<Equipament | HydratedEquipamentSet> = [],
    public id?: number
    ) {}

    get totaluhc(): number {
        return this.equipaments.reduce((sum, item) => {
            if (item instanceof HydratedEquipamentSet) {
                return sum + item.totaluhc;
            }
            return sum + item.uhc;
        }, 0);
    }

    toTableRow(): Record<string, TableCell> {
        return {
            ID: { value: this.id ?? '', align: 'center' },
            Nome: { value: this.name },
            'UHC Total': { value: this.totaluhc, align: 'center' },
        };
    }
}
