import { SystemType } from './enums/SystemType';
import type { IElement, TableCell } from './InterfaceElement';

export class System implements IElement {
    constructor(
    public name: string,
    public systemAbreviation: string,
    public systemType: SystemType,
    public id?: number
    ) {}

    toTableRow(): Record<string, TableCell> {
        return {
            ID: { value: this.id ?? '', align: 'center' },
            Nome: { value: this.name },
            Abreviação: { value: this.systemAbreviation, align: 'center' },
            Tipo: { value: this.systemType },
        };
    }
}

