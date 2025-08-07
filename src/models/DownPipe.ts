import { Contribution } from './Contribution';
import type { System } from './System';

export class DownPipe {
  constructor(
    public id: number,
    public numeration: string,
    public diameter: number,
    public system: System,
    public contributions: Contribution[] = []
  ) {}

  get totaluhc(): number {
    return this.contributions.reduce((sum, c) => sum + c.totaluhc, 0);
  }

  get abreviation(): string {
    return `${this.system.systemAbreviation}${this.numeration}`;
  }

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id,
      Numeração: this.numeration,
      Diâmetro: this.diameter,
      Sistema: this.system.name,
      'UHC Total': this.totaluhc,
    };
  }

  static tableColumns(): string[] {
    return ['ID', 'Numeração', 'Diâmetro', 'Sistema', 'UHC Total'];
  }
}

