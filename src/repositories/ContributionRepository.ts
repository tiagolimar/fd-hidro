import { db } from '@/db/db';
import { Contribution } from '@/models/Contribution';
import type { HydratedContribution } from '@/models/Contribution';
import { hydrateContribution } from '@/utils/hydrateContribution';
import { fromContribution, toContribution, type ContributionDTO } from '@/dto/contribution';

class ContributionRepository {
  private table = db.contributions;

  async getAll(): Promise<Contribution[]> {
    const records = await this.table.toArray();
    return records.map(toContribution);
  }

  async getById(id: number): Promise<Contribution | undefined> {
    const record = await this.table.get(id);
    return record ? toContribution(record) : undefined;
  }

  async create(data: Contribution): Promise<Contribution> {
    const dto: ContributionDTO = fromContribution(data);
    const id = await this.table.add(dto);
    return new Contribution(data.levelId, data.equipamentId, data.equipamentSetId, id);
  }

  async update(id: number, changes: Partial<Contribution>): Promise<number> {
    const dtoChanges: Partial<ContributionDTO> = { ...changes };
    return await this.table.update(id, dtoChanges);
  }

  async delete(id: number): Promise<void> {
    await this.table.delete(id);
  }

  async getAllHydrated(): Promise<HydratedContribution[]> {
    const records = await this.getAll();
    return Promise.all(records.map(hydrateContribution));
  }

  async getHydratedById(id: number): Promise<HydratedContribution | undefined> {
    const record = await this.getById(id);
    return record ? await hydrateContribution(record) : undefined;
  }
}

export default new ContributionRepository();
