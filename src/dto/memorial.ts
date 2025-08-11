import { Memorial } from '@/models/Memorial';
import { toDownPipe, fromDownPipe, type DownPipeDTO } from './downPipe';

export interface MemorialDTO {
  id?: number;
  name: string;
  downpipes: DownPipeDTO[];
}

export function toMemorial(dto: MemorialDTO): Memorial {
    const downpipes = dto.downpipes.map(toDownPipe);
    return new Memorial(dto.name, downpipes, dto.id);
}

export function fromMemorial(model: Memorial): MemorialDTO {
    return {
        id: model.id,
        name: model.name,
        downpipes: model.downpipes.map(fromDownPipe),
    };
}
