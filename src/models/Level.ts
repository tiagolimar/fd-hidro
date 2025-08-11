import type { IElement, TableCell } from "./InterfaceElement";

export class Level implements IElement {
  constructor(
    public name: string,
    public height: number,
    public id?: number
  ) {}

  toTableRow(): Record<string, TableCell> {
    return {
      ID: { value: this.id ?? '', align: 'center' },
      Nome: { value: this.name },
      Altura: { value: this.height, align: 'center' },
    };
  }
}

