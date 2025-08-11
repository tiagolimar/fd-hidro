import { db } from '@/db/db'
import type { System } from '@/models/System'
import { BaseRepository } from './BaseRepository'
import { toSystem, fromSystem, type SystemDTO } from '@/dto/system'

class SystemRepository extends BaseRepository<System, SystemDTO> {
    constructor() {
        super(db.systems, toSystem, fromSystem)
    }
}

export default new SystemRepository()
