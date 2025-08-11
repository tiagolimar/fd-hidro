import type { HydratedContribution } from './Contribution';
import type { System } from './System';
import type { IElement, TableCell } from './InterfaceElement';

export class DownPipe implements IElement {
    constructor(
    public numeration: string,
    public diameter: number,
    public system: System,
    public contributions: HydratedContribution[] = [],
    public id?: number
    ) {}

    get totaluhc(): number {
        return this.contributions.reduce((sum, c) => sum + c.totaluhc, 0);
    }

    get name(): string {
        return `${this.system.systemAbreviation}${this.numeration}`;
    }

    toTableRow(): Record<string, TableCell> {
        return {
            ID: { value: this.id ?? '', align: 'center' },
            Nome: { value: this.name },
            Diâmetro: { value: this.diameter, align: 'center' },
            Sistema: { value: this.system.name },
            'UHC Total': { value: this.totaluhc, align: 'center' },
        };
    }
}

