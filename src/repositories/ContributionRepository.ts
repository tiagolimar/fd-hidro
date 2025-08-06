import { db } from '@/db'
import type { Contribution } from '@/models/Contribution'
import { BaseRepository } from './BaseRepository'

class ContributionRepository extends BaseRepository<Contribution> {
  constructor() {
    super(db.contributions)
  }
}

export default new ContributionRepository()
