import type { IElement, TableCell } from "./InterfaceElement";

export class Equipament implements IElement {
  constructor(
    public name: string,
    public abreviation: string,
    public uhc: number,
    public id?: number
  ) {}

  toTableRow(): Record<string, TableCell> {
    return {
      ID: { value: this.id ?? '', align: 'center' },
      Nome: { value: this.name },
      Abreviação: { value: this.abreviation },
      UHC: { value: this.uhc, align: 'center' },
    };
  }
}

