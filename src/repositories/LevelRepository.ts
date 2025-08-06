import { db } from '@/db/db'
import type { Level } from '@/models/Level'
import { BaseRepository } from './BaseRepository'

class LevelRepository extends BaseRepository<Level> {
  constructor() {
    super(db.levels)
  }
}

export default new LevelRepository()
