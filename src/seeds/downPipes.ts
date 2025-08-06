import type { AppDB } from '@/db/db';
import { DownPipe } from '@/models/DownPipe';

export async function seedDownPipes(db: AppDB) {
  const systems = await db.systems.toArray();
  const contributions = await db.contributions.toArray();
  const s = (id: number) => systems.find(sys => sys.id === id)!;
  const c = (id: number) => contributions.find(con => con.id === id)!;

  const downpipes: DownPipe[] = [
    new DownPipe(1, '1', 100, s(1), [c(1), c(3), c(5), c(7), c(9), c(11)]),
    new DownPipe(2, '2', 100, s(1), [c(2), c(4), c(6), c(8), c(10), c(12)]),
    new DownPipe(3, '1', 100, s(2), [c(1), c(4), c(5), c(8), c(9), c(11)]),
    new DownPipe(4, '2', 100, s(2), [c(2), c(3), c(6), c(7), c(10), c(12)]),
    new DownPipe(5, '1', 100, s(3), [c(1), c(4), c(6), c(7), c(9), c(11)]),
    new DownPipe(6, '2', 100, s(3), [c(2), c(3), c(5), c(8), c(10), c(12)]),
    new DownPipe(7, '1', 100, s(4), [c(1), c(3), c(5), c(7), c(10), c(11)]),
    new DownPipe(8, '2', 100, s(4), [c(2), c(4), c(6), c(8), c(9), c(12)]),
  ];

  await db.downpipes.bulkAdd(downpipes);
}
