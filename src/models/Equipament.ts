export class Equipament {
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

  static tableColumns(): string[] {
    return ['ID', 'Nome', 'Abreviação', 'UHC'];
  }
}

