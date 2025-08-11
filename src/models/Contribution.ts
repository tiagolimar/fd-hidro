import type { IElement, TableCell } from './InterfaceElement';
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

    toTableRow(): Record<string, TableCell> {
        return {
            ID: { value: this.id ?? '', align: 'center' },
            Nível: { value: this.level.name },
            Equipamento: { value: this.equipament.name },
            UHC: { value: this.totaluhc, align: 'center' },
        };
    }
}
