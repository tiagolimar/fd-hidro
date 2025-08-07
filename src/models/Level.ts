import type { IElement } from "./InterfaceElement";

export class Level implements IElement {
  constructor(
    public id: number,
    public name: string,
    public height: number
  ) {}

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id,
      Nome: this.name,
      Altura: this.height,
    };
  }
}

