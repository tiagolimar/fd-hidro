import Dexie, { type Table } from 'dexie';
import type { System } from '@/models/System';
import type { Equipament } from '@/models/Equipament';
import type { EquipamentSet } from '@/models/EquipamentSet';
import type { Level } from '@/models/Level';
import type { Contribution } from '@/models/Contribution';
import type { DownPipe } from '@/models/DownPipe';
import type { Memorial } from '@/models/Memorial';

class AppDB extends Dexie {
  systems!: Table<System, number>;
  equipaments!: Table<Equipament, number>;
  equipamentSets!: Table<EquipamentSet, number>;
  levels!: Table<Level, number>;
  contributions!: Table<Contribution, number>;
  downpipes!: Table<DownPipe, number>;
  memorials!: Table<Memorial, number>;

  constructor() {
    super('fd-hidro');
    this.version(1).stores({
      systems: '++id, name, systemAbreviation, systemType',
      equipaments: '++id, name, abreviation, uhc',
      equipamentSets: '++id, name',
      levels: '++id, name, height',
      contributions: '++id',
      downpipes: '++id, numeration, diameter, system',
      memorials: '++id, name'
    });
  }
}

export const db = new AppDB();

export type { AppDB };
