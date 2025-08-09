import { DownPipe } from '@/models/DownPipe';
import { toSystem, fromSystem, type SystemDTO } from './system';
import {
  toHydratedContribution,
  fromHydratedContribution,
  type HydratedContributionDTO,
} from './contribution';

export interface DownPipeDTO {
  id?: number;
  numeration: string;
  diameter: number;
  system: SystemDTO;
  contributions: HydratedContributionDTO[];
}

export function toDownPipe(dto: DownPipeDTO): DownPipe {
  const system = toSystem(dto.system);
  const contributions = dto.contributions.map(toHydratedContribution);
  return new DownPipe(dto.id ?? 0, dto.numeration, dto.diameter, system, contributions);
}

export function fromDownPipe(model: DownPipe): DownPipeDTO {
  return {
    id: model.id,
    numeration: model.numeration,
    diameter: model.diameter,
    system: fromSystem(model.system),
    contributions: model.contributions.map(fromHydratedContribution),
  };
}
