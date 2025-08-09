import type { AppDB } from '@/db/db';
import { Level } from '@/models/Level';
import { fromLevel } from '@/dto/level';

export async function seedLevels(db: AppDB) {
  const levels: Level[] = [
    new Level(1, 'Térreo', 2.88),
    new Level(2, 'Lazer', 2.88),
    new Level(3, 'Pavimento 1', 2.88),
    new Level(4, 'Pavimento 2', 2.88),
    new Level(5, 'Pavimento 3', 2.88),
    new Level(6, 'Cobertura', 2.88),
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
    new Level(7, 'SUBSOLO 02', -5.35),
    new Level(8, 'SUBSOLO 01', -2.60),
    new Level(9, 'TÉRREO', 0.30),
    new Level(10, 'MEZANINO', 2.90),
    new Level(11, 'GARAGEM', 5.40),
    new Level(12, 'ESTACIONAMENTO 01', 8.15),
    new Level(13, 'ESTACIONAMENTO 02', 10.90),
    new Level(14, '1º TIPO', 14.20),
    new Level(15, '2º TIPO', 17.20),
    new Level(16, '3º TIPO', 20.20),
    new Level(17, '4º TIPO', 23.20),
    new Level(18, '5º TIPO', 26.20),
    new Level(19, '6º TIPO', 29.20),
    new Level(20, '7º TIPO', 32.20),
    new Level(21, '8º TIPO', 35.20),
    new Level(22, '9º TIPO', 38.20),
    new Level(23, '1º PISO DUPLEX', 41.20),
    new Level(24, '2º PISO DUPLEX', 44.20),
    new Level(25, 'COBERTA', 47.20)
  ];
  await db.levels.bulkAdd(levels.map(fromLevel));
}
