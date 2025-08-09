import { db } from '@/db/db'
import type { EquipamentSet } from '@/models/EquipamentSet'
import { BaseRepository } from './BaseRepository'
import {
  toEquipamentSet,
  fromEquipamentSet,
  type EquipamentSetDTO,
} from '@/dto/equipamentSet'

class EquipamentSetRepository extends BaseRepository<EquipamentSet, EquipamentSetDTO> {
  constructor() {
    super(db.equipamentSets, toEquipamentSet, fromEquipamentSet)
  }
}

export default new EquipamentSetRepository()
