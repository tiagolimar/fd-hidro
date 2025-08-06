import { db } from '@/db/db'
import type { EquipamentSet } from '@/models/EquipamentSet'
import { BaseRepository } from './BaseRepository'

class EquipamentSetRepository extends BaseRepository<EquipamentSet> {
  constructor() {
    super(db.equipamentSets)
  }
}

export default new EquipamentSetRepository()
