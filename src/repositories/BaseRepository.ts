import type { Table, UpdateSpec } from 'dexie';

export class BaseRepository<T, D> {
  constructor(
    private table: Table<D, number>,
    private toModel: (dto: D) => T,
    private fromModel: (model: T) => D,
  ) {}

  async getAll(): Promise<T[]> {
    const records = await this.table.toArray();
    return records.map(this.toModel);
  }

  async getById(id: number): Promise<T | undefined> {
    const record = await this.table.get(id);
    return record ? this.toModel(record) : undefined;
  }

  async create(data: T): Promise<T> {
    const dto = this.fromModel(data);
    const id = await this.table.add(dto);
    return this.toModel({ ...dto, id } as D);
  }

  async update(id: number, changes: Partial<T>): Promise<number> {
    const dtoChanges = changes as unknown as UpdateSpec<D>;
    return await this.table.update(id, dtoChanges);
  }

  async delete(id: number): Promise<void> {
    await this.table.delete(id);
  }
}
