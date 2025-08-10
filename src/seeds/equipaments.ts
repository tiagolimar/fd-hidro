import type { AppDB } from '@/db/db';
import { Equipament } from '@/models/Equipament';
import { fromEquipament } from '@/dto/equipament';

export async function seedEquipaments(db: AppDB) {
  const defaultFittings: Equipament[] = [
    new Equipament('Bacia Sanitária', 'BS', 6, 1),
    new Equipament('Lavatório (uso residencial)', 'LV', 1, 2),
    new Equipament('Lavatório (uso geral)', 'LV', 2, 3),
    new Equipament('Bebedouro', 'BE', 1, 4),
    new Equipament('Chuveiro', 'CH', 2, 5),
    new Equipament('Mictório', 'MC', 2, 6),
    new Equipament('Tanque', 'TQE', 3, 7),
    new Equipament('Banheira', 'BA', 1, 8),
    new Equipament('Máquina de Lavar Roupa', 'MLR', 3, 9),
    new Equipament('Pia', 'PIA', 3, 10),
  ];
  await db.equipaments.bulkAdd(defaultFittings.map(fromEquipament));
}
