import { Level } from '@/models/Level';

export interface LevelDTO {
  id?: number;
  name: string;
  height: number;
}

export function toLevel(dto: LevelDTO): Level {
  return new Level(dto.id ?? 0, dto.name, dto.height);
}

export function fromLevel(model: Level): LevelDTO {
  return {
    id: model.id,
    name: model.name,
    height: model.height,
  };
}
