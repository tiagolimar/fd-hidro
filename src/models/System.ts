import { SystemType } from './enums/SystemType';

export class System {
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

  static tableColumns(): string[] {
    return ['ID', 'Nome', 'Abreviação', 'Tipo'];
  }
}

