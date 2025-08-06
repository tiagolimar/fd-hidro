import { db } from '@/db'
import type { Equipament } from '@/models/Equipament'
import { BaseRepository } from './BaseRepository'

class EquipamentRepository extends BaseRepository<Equipament> {
  constructor() {
    super(db.equipaments)
  }
}

export default new EquipamentRepository()
