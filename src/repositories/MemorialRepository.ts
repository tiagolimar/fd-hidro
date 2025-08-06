import { db } from '@/db'
import type { Memorial } from '@/models/Memorial'
import { BaseRepository } from './BaseRepository'

class MemorialRepository extends BaseRepository<Memorial> {
  constructor() {
    super(db.memorials)
  }
}

export default new MemorialRepository()
