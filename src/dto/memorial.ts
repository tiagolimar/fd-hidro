import { Memorial } from '@/models/Memorial';
import { toDownPipe, fromDownPipe, type DownPipeDTO } from './downPipe';

export interface MemorialDTO {
  id?: number;
  name: string;
  downpipes: DownPipeDTO[];
}

export function toMemorial(dto: MemorialDTO): Memorial {
  const downpipes = dto.downpipes.map(toDownPipe);
  return new Memorial(dto.id ?? 0, dto.name, downpipes);
}

export function fromMemorial(model: Memorial): MemorialDTO {
  return {
    id: model.id,
    name: model.name,
    downpipes: model.downpipes.map(fromDownPipe),
  };
}
