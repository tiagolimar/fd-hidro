import { db } from '@/db/db'
import type { Equipament } from '@/models/Equipament'
import { BaseRepository } from './BaseRepository'
import { toEquipament, fromEquipament, type EquipamentDTO } from '@/dto/equipament'

class EquipamentRepository extends BaseRepository<Equipament, EquipamentDTO> {
    constructor() {
        super(db.equipaments, toEquipament, fromEquipament)
    }
}

export default new EquipamentRepository()
