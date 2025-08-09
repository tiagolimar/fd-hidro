import { System } from '@/models/System';
import { SystemType } from '@/models/enums/SystemType';

export interface SystemDTO {
  id?: number;
  name: string;
  systemAbreviation: string;
  systemType: SystemType;
}

export function toSystem(dto: SystemDTO): System {
  return new System(dto.id ?? 0, dto.name, dto.systemAbreviation, dto.systemType);
}

export function fromSystem(model: System): SystemDTO {
  return {
    id: model.id,
    name: model.name,
    systemAbreviation: model.systemAbreviation,
    systemType: model.systemType,
  };
}
