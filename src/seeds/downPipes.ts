import type { AppDB } from '@/db/db';
import { DownPipe } from '@/models/DownPipe';
import { hydrateContribution } from '@/utils/hydrateContribution';
import { toContribution } from '@/dto/contribution';
import { toSystem } from '@/dto/system';
import { fromDownPipe as fromDownPipeDTO } from '@/dto/downPipe';

export async function seedDownPipes(db: AppDB) {
  const systems = (await db.systems.toArray()).map(toSystem);
  const contributions = (await db.contributions.toArray()).map(toContribution);
  const s = (id: number) => systems.find(sys => sys.id === id)!;
  const c = async (id: number) =>
    hydrateContribution(contributions.find(con => con.id === id)!);

  const downpipes: DownPipe[] = [
    new DownPipe(1, '1', 100, s(1), [
      await c(1),
      await c(3),
      await c(5),
      await c(7),
      await c(9),
      await c(11),
    ]),
    new DownPipe(2, '2', 100, s(1), [
      await c(2),
      await c(4),
      await c(6),
      await c(8),
      await c(10),
      await c(12),
    ]),
    new DownPipe(3, '1', 100, s(2), [
      await c(1),
      await c(4),
      await c(5),
      await c(8),
      await c(9),
      await c(11),
    ]),
    new DownPipe(4, '2', 100, s(2), [
      await c(2),
      await c(3),
      await c(6),
      await c(7),
      await c(10),
      await c(12),
    ]),
    new DownPipe(5, '1', 100, s(3), [
      await c(1),
      await c(4),
      await c(6),
      await c(7),
      await c(9),
      await c(11),
    ]),
    new DownPipe(6, '2', 100, s(3), [
      await c(2),
      await c(3),
      await c(5),
      await c(8),
      await c(10),
      await c(12),
    ]),
    new DownPipe(7, '1', 100, s(4), [
      await c(1),
      await c(3),
      await c(5),
      await c(7),
      await c(10),
      await c(11),
    ]),
    new DownPipe(8, '2', 100, s(4), [
      await c(2),
      await c(4),
      await c(6),
      await c(8),
      await c(9),
      await c(12),
    ]),
  ];

  await db.downpipes.bulkAdd(downpipes.map(fromDownPipeDTO));
}
