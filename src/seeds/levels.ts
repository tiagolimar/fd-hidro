import type { AppDB } from '@/db/db';
import { Level } from '@/models/Level';
import { fromLevel } from '@/dto/level';

export async function seedLevels(db: AppDB) {
    const levels: Level[] = [
        new Level('SUBSOLO 02', -5.35, 1),
        new Level('SUBSOLO 01', -2.60, 2),
        new Level('TÉRREO', 0.30, 3),
        new Level('MEZANINO', 2.90, 4),
        new Level('GARAGEM', 5.40, 5),
        new Level('ESTACIONAMENTO 01', 8.15, 6),
        new Level('ESTACIONAMENTO 02', 10.90, 7),
        new Level('1º TIPO', 14.20, 8),
        new Level('2º TIPO', 17.20, 9),
        new Level('3º TIPO', 20.20, 10),
        new Level('4º TIPO', 23.20, 11),
        new Level('5º TIPO', 26.20, 12),
        new Level('6º TIPO', 29.20, 13),
        new Level('7º TIPO', 32.20, 14),
        new Level('8º TIPO', 35.20, 15),
        new Level('9º TIPO', 38.20, 16),
        new Level('COBERTA', 47.20, 17)
    ];
    await db.levels.bulkAdd(levels.map(fromLevel));
}
