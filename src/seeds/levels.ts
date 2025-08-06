import type { AppDB } from '@/db/db';
import { Level } from '@/models/Level';

export async function seedLevels(db: AppDB) {
  const levels: Level[] = [
    new Level(1, 'Térreo', 2.88),
    new Level(2, 'Lazer', 2.88),
    new Level(3, 'Pavimento 1', 2.88),
    new Level(4, 'Pavimento 2', 2.88),
    new Level(5, 'Pavimento 3', 2.88),
    new Level(6, 'Cobertura', 2.88),
  ];
  await db.levels.bulkAdd(levels);
}
