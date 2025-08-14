import { db } from '@/db/db'
import { EquipamentSet, HydratedEquipamentSet } from '@/models/EquipamentSet'
import { BaseRepository } from './BaseRepository'
import {
    toEquipamentSet,
    fromEquipamentSet,
    type EquipamentSetDTO,
} from '@/dto/equipamentSet'
import { hydrateEquipamentSet } from '@/utils/hydrateEquipamentSet'

class EquipamentSetRepository {
    private base: BaseRepository<EquipamentSet, EquipamentSetDTO>

    constructor() {
        this.base = new BaseRepository(
            db.equipamentSets,
            toEquipamentSet,
            fromEquipamentSet,
        )
    }

    async getAll(): Promise<HydratedEquipamentSet[]> {
        const sets = await this.base.getAll()
        return Promise.all(sets.map(hydrateEquipamentSet))
    }

    async getById(id: number): Promise<HydratedEquipamentSet | undefined> {
        const set = await this.base.getById(id)
        return set ? await hydrateEquipamentSet(set) : undefined
    }

    create(data: EquipamentSet) {
        return this.base.create(data)
    }

    update(id: number, changes: Partial<EquipamentSet>) {
        return this.base.update(id, changes)
    }

    delete(id: number) {
        return this.base.delete(id)
    }
}

export default new EquipamentSetRepository()

