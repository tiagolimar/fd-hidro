import type { IElement } from "./InterfaceElement";

export class Equipament implements IElement {
  constructor(
    public id: number,
    public name: string,
    public abreviation: string,
    public uhc: number
  ) {}

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id,
      Nome: this.name,
      Abreviação: this.abreviation,
      UHC: this.uhc,
    };
  }
}

