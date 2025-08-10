import Dexie, { type Table } from 'dexie';
import type { SystemDTO } from '@/dto/system';
import type { LevelDTO } from '@/dto/level';
import type { EquipamentDTO } from '@/dto/equipament';
import type { EquipamentSetDTO } from '@/dto/equipamentSet';
import type { ContributionDTO } from '@/dto/contribution';
import type { DownPipeDTO } from '@/dto/downPipe';
import type { MemorialDTO } from '@/dto/memorial';

export class AppDB extends Dexie {
  systems!: Table<SystemDTO, number>;
  levels!: Table<LevelDTO, number>;
  equipaments!: Table<EquipamentDTO, number>;
  equipamentSets!: Table<EquipamentSetDTO, number>;
  contributions!: Table<ContributionDTO, number>;
  downpipes!: Table<DownPipeDTO, number>;
  memorials!: Table<MemorialDTO, number>;

  constructor() {
    super('fd-mep-memorial');
    this.version(1).stores({
      systems: '++id',
      levels: '++id',
      equipaments: '++id',
      equipamentSets: '++id',
      contributions: '++id',
      downpipes: '++id',
      memorials: '++id',
    });

  }
}

export const db = new AppDB();
