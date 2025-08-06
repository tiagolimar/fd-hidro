import Dexie, { type Table } from 'dexie';
import { System } from './models/System';
import { Level } from './models/Level';
import { Equipament } from './models/Equipament';
import { EquipamentSet } from './models/EquipamentSet';
import { Contribution } from './models/Contribution';
import { DownPipe } from './models/DownPipe';
import { Memorial } from './models/Memorial';

export class AppDB extends Dexie {
  systems!: Table<System, number>;
  levels!: Table<Level, number>;
  equipaments!: Table<Equipament, number>;
  equipamentSets!: Table<EquipamentSet, number>;
  contributions!: Table<Contribution, number>;
  downpipes!: Table<DownPipe, number>;
  memorials!: Table<Memorial, number>;

  constructor() {
    super('fd-hidro');
    this.version(1).stores({
      systems: 'id',
      levels: 'id',
      equipaments: 'id',
      equipamentSets: 'id',
      contributions: 'id',
      downpipes: 'id',
      memorials: 'id',
    });

    this.systems.mapToClass(System);
    this.levels.mapToClass(Level);
    this.equipaments.mapToClass(Equipament);
    this.equipamentSets.mapToClass(EquipamentSet);
    this.contributions.mapToClass(Contribution);
    this.downpipes.mapToClass(DownPipe);
    this.memorials.mapToClass(Memorial);
  }
}

export const db = new AppDB();
