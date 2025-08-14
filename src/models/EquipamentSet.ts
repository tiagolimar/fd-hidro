import { Equipament } from './Equipament';
import { EquipamentSetItem } from './EquipamentSetItem';
import type { IElement, TableCell } from './InterfaceElement';

export class EquipamentSet {
    constructor(
        public name: string,
        public items: EquipamentSetItem[] = [],
        public id?: number,
    ) {}
}

export interface HydratedEquipamentSetItem {
    equipament: Equipament | HydratedEquipamentSet;
    quantity: number;
}

export class HydratedEquipamentSet implements IElement {
    constructor(
        public name: string,
        public items: HydratedEquipamentSetItem[] = [],
        public id?: number,
    ) {}

    get totaluhc(): number {
        return this.items.reduce((sum, item) => {
            const uhc =
                item.equipament instanceof HydratedEquipamentSet
                    ? item.equipament.totaluhc
                    : item.equipament.uhc;
            return sum + uhc * item.quantity;
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
