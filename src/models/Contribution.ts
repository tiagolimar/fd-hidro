import type { IElement, TableCell } from './InterfaceElement';
import { Level } from './Level';
import { Equipament } from './Equipament';
import { HydratedEquipamentSet } from './EquipamentSet';

export class Contribution {
    constructor(
        public levelId: number,
        public quantity: number = 1,
        public equipamentId?: number,
        public equipamentSetId?: number,
        public id?: number,
    ) {}
}

export class HydratedContribution implements IElement {
    constructor(
        public level: Level,
        public equipament: Equipament | HydratedEquipamentSet,
        public quantity: number = 1,
        public id?: number,
    ) {}

    get totaluhc(): number {
        const uhc =
            this.equipament instanceof HydratedEquipamentSet
                ? this.equipament.totaluhc
                : this.equipament.uhc;
        return uhc * this.quantity;
    }

    toTableRow(): Record<string, TableCell> {
        return {
            ID: { value: this.id ?? '', align: 'center' },
            Nível: { value: this.level.name },
            Equipamento: { value: this.equipament.name },
            Quantidade: { value: this.quantity, align: 'center' },
            UHC: { value: this.totaluhc, align: 'center' },
        };
    }
}
