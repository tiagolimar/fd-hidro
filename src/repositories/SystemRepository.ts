import { db } from '@/db/db'
import type { System } from '@/models/System'
import { BaseRepository } from './BaseRepository'

class SystemRepository extends BaseRepository<System> {
  constructor() {
    super(db.systems)
  }
}

export default new SystemRepository()
