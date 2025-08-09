import type { AppDB } from '@/db/db';
import { Level } from '@/models/Level';
import { fromLevel } from '@/dto/level';

export async function seedLevels(db: AppDB) {
  const levels: Level[] = [
    new Level('Térreo', 2.88, 1),
    new Level('Lazer', 2.88, 2),
    new Level('Pavimento 1', 2.88, 3),
    new Level('Pavimento 2', 2.88, 4),
    new Level('Pavimento 3', 2.88, 5),
    new Level('Cobertura', 2.88, 6),
    //crie
    // ['SUBSOLO 02', -5.35],
    // ['SUBSOLO 01', -2.60],
    // ['TÉRREO', 0.30],
    // ['MEZANINO', 2.90],
    // ['GARAGEM', 5.40],
    // ['ESTACIONAMENTO 01', 8.15],
    // ['ESTACIONAMENTO 02', 10.90],
    // ['1º TIPO', 14.20],
    // ['2º TIPO', 17.20],
    // ['3º TIPO', 20.20],
    // ['4º TIPO', 23.20],
    // ['5º TIPO', 26.20],
    // ['6º TIPO', 29.20],
    // ['7º TIPO', 32.20],
    // ['8º TIPO', 35.20],
    // ['9º TIPO', 38.20],
    // ['1º PISO DUPLEX', 41.20],
    // ['2º PISO DUPLEX', 44.20],
    // ['COBERTA', 47.20]
    new Level('SUBSOLO 02', -5.35, 7),
    new Level('SUBSOLO 01', -2.60, 8),
    new Level('TÉRREO', 0.30, 9),
    new Level('MEZANINO', 2.90, 10),
    new Level('GARAGEM', 5.40, 11),
    new Level('ESTACIONAMENTO 01', 8.15, 12),
    new Level('ESTACIONAMENTO 02', 10.90, 13),
    new Level('1º TIPO', 14.20, 14),
    new Level('2º TIPO', 17.20, 15),
    new Level('3º TIPO', 20.20, 16),
    new Level('4º TIPO', 23.20, 17),
    new Level('5º TIPO', 26.20, 18),
    new Level('6º TIPO', 29.20, 19),
    new Level('7º TIPO', 32.20, 20),
    new Level('8º TIPO', 35.20, 21),
    new Level('9º TIPO', 38.20, 22),
    new Level('1º PISO DUPLEX', 41.20, 23),
    new Level('2º PISO DUPLEX', 44.20, 24),
    new Level('COBERTA', 47.20, 25)
  ];
  await db.levels.bulkAdd(levels.map(fromLevel));
}
