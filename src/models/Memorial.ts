import { DownPipe } from './DownPipe';
import type { IElement } from './InterfaceElement';

export class Memorial implements IElement {
  constructor(
    public id: number,
    public name: string,
    public downpipes: DownPipe[] = []
  ) {}

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id,
      Nome: this.name,
    };
  }
}

