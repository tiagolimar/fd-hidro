import { SystemType } from './enums/SystemType';
import type { IElement } from './InterfaceElement';

export class System implements IElement {
  constructor(
    public id: number,
    public name: string,
    public systemAbreviation: string,
    public systemType: SystemType
  ) {}

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id,
      Nome: this.name,
      Abreviação: this.systemAbreviation,
      Tipo: this.systemType,
    };
  }
}

