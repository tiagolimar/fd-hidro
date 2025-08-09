import { DownPipe } from './DownPipe';
import type { IElement } from './InterfaceElement';

export class Memorial implements IElement {
  constructor(
    public name: string,
    public downpipes: DownPipe[] = [],
    public id?: number
  ) {}

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id ?? '',
      Nome: this.name,
    };
  }
}

