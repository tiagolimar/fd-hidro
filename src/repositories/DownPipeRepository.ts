import { db } from '@/db/db'
import type { DownPipe } from '@/models/DownPipe'
import { BaseRepository } from './BaseRepository'

class DownPipeRepository extends BaseRepository<DownPipe> {
  constructor() {
    super(db.downpipes)
  }
}

export default new DownPipeRepository()
