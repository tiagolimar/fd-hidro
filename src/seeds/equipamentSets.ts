import type { AppDB } from '@/db/db';
import { EquipamentSet } from '@/models/EquipamentSet';
import { toEquipament } from '@/dto/equipament';
import { fromEquipamentSet } from '@/dto/equipamentSet';

export async function seedEquipamentSets(db: AppDB) {
  const equipaments = (await db.equipaments.toArray()).map(toEquipament);
  const e = (id: number) => equipaments.find(eq => eq.id === id)!;

  const sets: EquipamentSet[] = [
    new EquipamentSet('WC', [e(1), e(2), e(4), e(5)], 1),
    new EquipamentSet('Lavabo', [e(1), e(2), e(4)], 2),
    new EquipamentSet('Área de Serviço e Cozinha', [e(7), e(10), e(9)], 3),
  ];
  await db.equipamentSets.bulkAdd(sets.map(fromEquipamentSet));
}
