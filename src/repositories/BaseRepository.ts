import type { Table } from 'dexie'

export class BaseRepository<T> {
  constructor(private table: Table<T, number>) {}

  async getAll(): Promise<T[]> {
    return await this.table.toArray()
  }

  async getById(id: number): Promise<T | undefined> {
    return await this.table.get(id)
  }

  async create(data: T): Promise<T> {
    const id = await this.table.add(data)
    return { ...data, id }
  }

  async update(id: number, changes: Partial<T>): Promise<number> {
    return await this.table.update(id, changes)
  }

  async delete(id: number): Promise<void> {
    await this.table.delete(id)
  }
}
