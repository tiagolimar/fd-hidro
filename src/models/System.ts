import { SystemType } from './enums/SystemType';

export class System {
  constructor(
    public id: number,
    public name: string,
    public systemAbreviation: string,
    public systemType: SystemType
  ) {}
}

