import { DownPipe } from '@/models/DownPipe';

export interface DownPipeDTO {
  id?: number;
  numeration: string;
  diameter: number;
  systemId: number;
  contributionIds: number[];
}

export function toDownPipe(dto: DownPipeDTO): DownPipe {
    return new DownPipe(
        dto.numeration,
        dto.diameter,
        dto.systemId,
        dto.contributionIds,
        dto.id
    );
}

export function fromDownPipe(model: DownPipe): DownPipeDTO {
    return {
        id: model.id,
        numeration: model.numeration,
        diameter: model.diameter,
        systemId: model.systemId,
        contributionIds: model.contributionIds,
    };
}

