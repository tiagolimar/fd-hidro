import type { AppDB } from '@/db/db';
import { Equipament } from '@/models/Equipament';
import { fromEquipament } from '@/dto/equipament';

export async function seedEquipaments(db: AppDB) {
  const defaultFittings: Equipament[] = [
    new Equipament(1, 'Bacia Sanitária', 'BS', 6),
    new Equipament(2, 'Lavatório (uso residencial)', 'LV', 1),
    new Equipament(3, 'Lavatório (uso geral)', 'LV', 2),
    new Equipament(4, 'Ducha', 'DU', 0.4),
    new Equipament(5, 'Chuveiro', 'CH', 2),
    new Equipament(6, 'Bacia Sanitária', 'CDE', 0.3),
    new Equipament(7, 'Tanque', 'TQE', 3),
    new Equipament(8, 'Banheira', 'BA', 1.0),
    new Equipament(9, 'Máquina de Lavar Roupa', 'MLR', 3),
    new Equipament(10, 'Pia', 'PIA', 3),
  ];
  await db.equipaments.bulkAdd(defaultFittings.map(fromEquipament));
}
