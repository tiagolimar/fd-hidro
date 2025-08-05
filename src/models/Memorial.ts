import { DownPipe } from './DownPipe';

export class Memorial {
  constructor(
    public id: number,
    public name: string,
    public downpipes: DownPipe[] = []
  ) {}
}

