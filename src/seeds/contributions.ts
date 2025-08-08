import type { AppDB } from '@/db/db';
import { Contribution } from '@/models/Contribution';

export async function seedContributions(db: AppDB) {
  const contributions: Contribution[] = [
    new Contribution(1, 1, 1),
    new Contribution(2, 1, undefined, 1),
    new Contribution(3, 2, 2),
    new Contribution(4, 2, undefined, 2),
    new Contribution(5, 3, 3),
    new Contribution(6, 3, undefined, 3),
    new Contribution(7, 4, 4),
    new Contribution(8, 4, 5),
    new Contribution(9, 5, 7),
    new Contribution(10, 5, 9),
    new Contribution(11, 6, 10),
    new Contribution(12, 6, 8),
  ];

  await db.contributions.bulkAdd(contributions);
}
