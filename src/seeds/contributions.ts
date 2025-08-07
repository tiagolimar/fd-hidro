import type { AppDB } from '@/db/db';
import { Contribution } from '@/models/Contribution';

export async function seedContributions(db: AppDB) {
  const levels = await db.levels.toArray();
  const equipaments = await db.equipaments.toArray();
  const sets = await db.equipamentSets.toArray();
  const l = (id: number) => levels.find(level => level.id === id)!;
  const e = (id: number) => equipaments.find(eq => eq.id === id)!;
  const s = (id: number) => sets.find(set => set.id === id)!;

  const contributions: Contribution[] = [
    new Contribution(1, l(1), e(1)),
    new Contribution(2, l(1), s(1)),
    new Contribution(3, l(2), e(2)),
    new Contribution(4, l(2), s(2)),
    new Contribution(5, l(3), e(3)),
    new Contribution(6, l(3), s(3)),
    new Contribution(7, l(4), e(4)),
    new Contribution(8, l(4), e(5)),
    new Contribution(9, l(5), e(7)),
    new Contribution(10, l(5), e(9)),
    new Contribution(11, l(6), e(10)),
    new Contribution(12, l(6), e(8)),
  ];
  
  await db.contributions.bulkAdd(contributions);
}
