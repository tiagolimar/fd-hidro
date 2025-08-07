import { DownPipe } from './DownPipe';

export class Memorial {
  constructor(
    public id: number,
    public name: string,
    public downpipes: DownPipe[] = []
  ) {}

  toTableRow(): Record<string, string | number> {
    return {
      ID: this.id,
      Nome: this.name,
    };
  }

  static tableColumns(): string[] {
    return ['ID', 'Nome'];
  }
}

