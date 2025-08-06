import type { AppDB } from '../db';
import { seedSystems } from './systems';
import { seedEquipaments } from './equipaments';
import { seedEquipamentSets } from './equipamentSets';
import { seedLevels } from './levels';
import { seedContributions } from './contributions';
import { seedDownPipes } from './downPipes';
import { seedMemorials } from './memorials';

export async function runSeeds(db: AppDB) {
  if (await db.systems.count() === 0) await seedSystems(db);
  if (await db.equipaments.count() === 0) await seedEquipaments(db);
  if (await db.equipamentSets.count() === 0) await seedEquipamentSets(db);
  if (await db.levels.count() === 0) await seedLevels(db);
  if (await db.contributions.count() === 0) await seedContributions(db);
  if (await db.downpipes.count() === 0) await seedDownPipes(db);
  if (await db.memorials.count() === 0) await seedMemorials(db);
}
