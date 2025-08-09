import type { HydratedContribution } from './Contribution';
import type { System } from './System';
import type { IElement } from './InterfaceElement';

export class DownPipe implements IElement {
  constructor(
    public numeration: string,
    public diameter: number,
    public system: System,
    public contributions: HydratedContribution[] = [],
    public id?: number
  ) {}

  get totaluhc(): number {
    return this.contributions.reduce((sum, c) => sum + c.totaluhc, 0);
  }

  get name(): string {
    return `${this.system.systemAbreviation}${this.numeration}`;
  }

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id ?? '',
      Nome: this.name,
      Diâmetro: this.diameter,
      Sistema: this.system.name,
      'UHC Total': this.totaluhc,
    };
  }
}

