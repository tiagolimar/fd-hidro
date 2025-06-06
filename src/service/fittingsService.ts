import type { HydraulicFitting } from '@/types/HydraulicFittingType';

const STORAGE_KEY = 'hydraulicFittings';

const defaultFittings: HydraulicFitting[] = [
  { id: 1, abreviation: 'BS', name: 'Bacia Sanitária', relativeWeight: 0.3 },
  { id: 2, abreviation: 'LV', name: 'Lavatório', relativeWeight: 0.3 },
  { id: 3, abreviation: 'TJ', name: 'Torneira de Jardim', relativeWeight: 0.4 },
  { id: 4, abreviation: 'DU', name: 'Ducha', relativeWeight: 0.4 },
  { id: 5, abreviation: 'CH', name: 'Chuveiro', relativeWeight: 0.4 },
  { id: 6, abreviation: 'CDE', name: 'Bacia Sanitária', relativeWeight: 0.3 },
  { id: 7, abreviation: 'TQE', name: 'Tanque', relativeWeight: 0.7 },
  { id: 8, abreviation: 'BA', name: 'Banheira', relativeWeight: 1.0 },
  { id: 9, abreviation: 'MLR', name: 'Máquina de Lavar Roupa', relativeWeight: 1.0 },
  { id: 10, abreviation: 'PIA', name: 'Pia', relativeWeight: 0.7 },
];

export function initFittingsStorage() {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultFittings));
  }
}

export function getFittings(): HydraulicFitting[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addFittingService(fitting: HydraulicFitting) {
  const fittings = getFittings();
  fittings.push(fitting);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fittings));
}

export function removeFittingService(id: number) {
  const fittings = getFittings();
  const updatedFittings = fittings.filter((fitting) => fitting.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFittings));
}

export function generateNextId() {
  const fittings = getFittings();
  return Math.max(...fittings.map((fitting) => fitting.id)) + 1;
}