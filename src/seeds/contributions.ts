import type { AppDB } from '@/db/db';
import { Contribution } from '@/models/Contribution';
import { fromContribution } from '@/dto/contribution';

export async function seedContributions(db: AppDB) {
  const contributions: Contribution[] = [
    new Contribution(1, 1, undefined, 1),
    new Contribution(1, undefined, 1, 2),
    new Contribution(2, 2, undefined, 3),
    new Contribution(2, undefined, 2, 4),
    new Contribution(3, 3, undefined, 5),
    new Contribution(3, undefined, 3, 6),
    new Contribution(4, 4, undefined, 7),
    new Contribution(4, 5, undefined, 8),
    new Contribution(5, 7, undefined, 9),
    new Contribution(5, 9, undefined, 10),
    new Contribution(6, 10, undefined, 11),
    new Contribution(6, 8, undefined, 12),
  ];

  await db.contributions.bulkAdd(contributions.map(fromContribution));
}
