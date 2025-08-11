import type { AppDB } from '@/db/db';
import { Memorial } from '@/models/Memorial';
import { toDownPipe } from '@/dto/downPipe';
import { fromMemorial } from '@/dto/memorial';

export async function seedMemorials(db: AppDB) {
    const downpipes = (await db.downpipes.toArray()).map(toDownPipe);
    const memorials: Memorial[] = [
        new Memorial('Memorial Sanitário', downpipes, 1),
    ];
    await db.memorials.bulkAdd(memorials.map(fromMemorial));
}
