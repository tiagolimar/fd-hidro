import { DownPipe } from './DownPipe';
import type { IElement, TableCell } from './InterfaceElement';

export class Memorial implements IElement {
    constructor(
    public name: string,
    public downpipes: DownPipe[] = [],
    public id?: number
    ) {}

    toTableRow(): Record<string, TableCell> {
        return {
            ID: { value: this.id ?? '', align: 'center' },
            Nome: { value: this.name },
        };
    }
}

