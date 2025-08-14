import type { AppDB } from '@/db/db';
import { DownPipe } from '@/models/DownPipe';
import { fromDownPipe as fromDownPipeDTO } from '@/dto/downPipe';

export async function seedDownPipes(db: AppDB) {
    const downpipes: DownPipe[] = [
        new DownPipe('1', 100, 1, [1, 3, 5, 7, 9, 11], 1),
        new DownPipe('2', 100, 1, [2, 4, 6, 8, 10, 12], 2),
        new DownPipe('1', 100, 2, [1, 4, 5, 8, 9, 11], 3),
        new DownPipe('2', 100, 2, [2, 3, 6, 7, 10, 12], 4),
        new DownPipe('1', 100, 3, [1, 4, 6, 7, 9, 11], 5),
        new DownPipe('2', 100, 3, [2, 3, 5, 8, 10, 12], 6),
        new DownPipe('1', 100, 4, [1, 3, 5, 7, 10, 11], 7),
        new DownPipe('2', 100, 4, [2, 4, 6, 8, 9, 12], 8),
    ];

    await db.downpipes.bulkAdd(downpipes.map(fromDownPipeDTO));
}

