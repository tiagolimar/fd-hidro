import { db } from '@/db/db'
import type { Level } from '@/models/Level'
import { BaseRepository } from './BaseRepository'
import { toLevel, fromLevel, type LevelDTO } from '@/dto/level'

class LevelRepository extends BaseRepository<Level, LevelDTO> {
  constructor() {
    super(db.levels, toLevel, fromLevel)
  }
}

export default new LevelRepository()
