import { db } from '@/db/db'
import type { DownPipe } from '@/models/DownPipe'
import { BaseRepository } from './BaseRepository'
import { toDownPipe, fromDownPipe, type DownPipeDTO } from '@/dto/downPipe'

class DownPipeRepository extends BaseRepository<DownPipe, DownPipeDTO> {
    constructor() {
        super(db.downpipes, toDownPipe, fromDownPipe)
    }
}

export default new DownPipeRepository()
