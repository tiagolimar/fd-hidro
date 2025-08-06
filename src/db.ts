import Dexie, { Table } from 'dexie'
import { System } from '@/models/System'
import { DownPipe } from '@/models/DownPipe'
import { Contribution } from '@/models/Contribution'
import { Equipament } from '@/models/Equipament'
import { EquipamentSet } from '@/models/EquipamentSet'
import { Level } from '@/models/Level'
import { Memorial } from '@/models/Memorial'

export class AppDB extends Dexie {
  systems!: Table<System, number>
  downpipes!: Table<DownPipe, number>
  contributions!: Table<Contribution, number>
  equipaments!: Table<Equipament, number>
  equipamentSets!: Table<EquipamentSet, number>
  levels!: Table<Level, number>
  memorials!: Table<Memorial, number>

  constructor() {
    super('fd-hidro')
    this.version(1).stores({
      systems: '++id, name, systemAbreviation, systemType',
      downpipes: '++id, numeration, diameter, system',
      contributions: '++id, level, equipament',
      equipaments: '++id, name, abreviation, uhc',
      equipamentSets: '++id, name',
      levels: '++id, name, height',
      memorials: '++id, name'
    })
  }
}

export const db = new AppDB()
