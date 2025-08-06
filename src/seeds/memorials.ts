import type { AppDB } from '../db';
import { Memorial } from '../models/Memorial';

export async function seedMemorials(db: AppDB) {
  const downpipes = await db.downpipes.toArray();
  const memorials: Memorial[] = [
    new Memorial(1, 'Memorial Sanitário', downpipes),
  ];
  await db.memorials.bulkAdd(memorials);
}
