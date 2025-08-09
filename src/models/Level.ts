import type { IElement } from "./InterfaceElement";

export class Level implements IElement {
  constructor(
    public name: string,
    public height: number,
    public id?: number
  ) {}

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id ?? '',
      Nome: this.name,
      Altura: this.height,
    };
  }
}

