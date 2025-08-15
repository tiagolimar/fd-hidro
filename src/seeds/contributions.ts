import type { AppDB } from '@/db/db';
import { Contribution } from '@/models/Contribution';
import { fromContribution } from '@/dto/contribution';

export async function seedContributions(db: AppDB) {
    const contributions: Contribution[] = [
        new Contribution(1, 1, 1, undefined, 1),
        new Contribution(1, 1, undefined, 1, 2),
        new Contribution(2, 1, 2, undefined, 3),
        new Contribution(2, 1, undefined, 2, 4),
        new Contribution(3, 1, 3, undefined, 5),
        new Contribution(3, 1, undefined, 3, 6),
        new Contribution(4, 1, 4, undefined, 7),
        new Contribution(4, 1, 5, undefined, 8),
        new Contribution(5, 1, 7, undefined, 9),
        new Contribution(5, 1, 9, undefined, 10),
        new Contribution(6, 1, 10, undefined, 11),
        new Contribution(6, 1, 8, undefined, 12),
    ];

    await db.contributions.bulkAdd(contributions.map(fromContribution));
}
