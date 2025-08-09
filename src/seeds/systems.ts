import type { AppDB } from '@/db/db';
import { System } from '@/models/System';
import { SystemType } from '@/models/enums/SystemType';
import { fromSystem } from '@/dto/system';

export async function seedSystems(db: AppDB) {
  const systems: System[] = [
    new System('Esgoto', 'TQ', SystemType.Sanitario, 1),
    new System('Sabão', 'TS', SystemType.Sanitario, 2),
    new System('Gordura', 'TG', SystemType.Sanitario, 3),
    new System('Drenagem', 'DR', SystemType.Sanitario, 4),
  ];
  await db.systems.bulkAdd(systems.map(fromSystem));
}
