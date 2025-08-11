import { db } from '@/db/db'
import type { Level } from '@/models/Level'
import { BaseRepository } from './BaseRepository'
import { toLevel, fromLevel, type LevelDTO } from '@/dto/level'

class LevelRepository extends BaseRepository<Level, LevelDTO> {
  constructor() {
    super(db.levels, toLevel, fromLevel)
  }

  update(id: number, changes: Partial<Level>) {
    return super.update(id, changes)
  }

  delete(id: number) {
    return super.delete(id)
  }
}

export default new LevelRepository()
