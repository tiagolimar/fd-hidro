import type { AppDB } from '@/db/db';
import { System } from '@/models/System';
import { SystemType } from '@/models/enums/SystemType';
import { fromSystem } from '@/dto/system';

export async function seedSystems(db: AppDB) {
  const systems: System[] = [
    new System(1, 'Esgoto', 'TQ', SystemType.Sanitario),
    new System(2, 'Sabão', 'TS', SystemType.Sanitario),
    new System(3, 'Gordura', 'TG', SystemType.Sanitario),
    new System(4, 'Drenagem', 'DR', SystemType.Sanitario),
  ];
  await db.systems.bulkAdd(systems.map(fromSystem));
}
