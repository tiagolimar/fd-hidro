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
        const names = this.items.map(i => i.equipament.name).join(', ');
        const quantities = this.items.map(i => i.quantity).join(', ');

        return {
            ID: { value: this.id ?? '', align: 'center' },
            Nome: { value: this.name },
            Equipamento: { value: names },
            Quantidade: { value: quantities, align: 'center' },
            'UHC Total': { value: this.totaluhc, align: 'center' },
        };
    }
}
