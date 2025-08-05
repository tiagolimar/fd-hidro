import { Contribution } from './Contribution';

export class DownPipe {
  constructor(
    public id: number,
    public numeration: string,
    public diameter: number,
    public systemAbreviation: string,
    public totalWeight: number,
    public contributions: Contribution[] = []
  ) {}

  get totaluhc(): number {
    return this.contributions.reduce((sum, c) => sum + c.totaluhc, 0);
  }
}

