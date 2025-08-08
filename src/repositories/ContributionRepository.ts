import { db } from '@/db/db'
import type { Contribution, HydratedContribution } from '@/models/Contribution'
import { BaseRepository } from './BaseRepository'
import { hydrateContribution } from '@/utils/hydrateContribution'

class ContributionRepository extends BaseRepository<Contribution> {
  constructor() {
    super(db.contributions)
  }

  async getAllHydrated(): Promise<HydratedContribution[]> {
    const records = await this.getAll()
    return Promise.all(records.map(hydrateContribution))
  }

  async getHydratedById(id: number): Promise<HydratedContribution | undefined> {
    const record = await this.getById(id)
    return record ? await hydrateContribution(record) : undefined
  }
}

export default new ContributionRepository()
