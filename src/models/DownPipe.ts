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
}

