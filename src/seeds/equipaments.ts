import type { AppDB } from '@/db/db';
import { Equipament } from '@/models/Equipament';
import { fromEquipament } from '@/dto/equipament';

export async function seedEquipaments(db: AppDB) {
  const defaultFittings: Equipament[] = [
    new Equipament('Bacia Sanitária', 'BS', 6, 1),
    new Equipament('Lavatório (uso residencial)', 'LV', 1, 2),
    new Equipament('Lavatório (uso geral)', 'LV', 2, 3),
    new Equipament('Ducha', 'DU', 0.4, 4),
    new Equipament('Chuveiro', 'CH', 2, 5),
    new Equipament('Bacia Sanitária', 'CDE', 0.3, 6),
    new Equipament('Tanque', 'TQE', 3, 7),
    new Equipament('Banheira', 'BA', 1.0, 8),
    new Equipament('Máquina de Lavar Roupa', 'MLR', 3, 9),
    new Equipament('Pia', 'PIA', 3, 10),
  ];
  await db.equipaments.bulkAdd(defaultFittings.map(fromEquipament));
}
