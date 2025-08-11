import { db } from '@/db/db'
import type { Memorial } from '@/models/Memorial'
import { BaseRepository } from './BaseRepository'
import { toMemorial, fromMemorial, type MemorialDTO } from '@/dto/memorial'

class MemorialRepository extends BaseRepository<Memorial, MemorialDTO> {
    constructor() {
        super(db.memorials, toMemorial, fromMemorial)
    }
}

export default new MemorialRepository()
