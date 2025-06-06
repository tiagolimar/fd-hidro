import type { HydraulicFittingSet } from "@/types/HydraulicFittingSetType";

const STORAGE_KEY = "hydraulicFittingsSets";

export function getFittingsSets(): HydraulicFittingSet[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addFittingSetService(fittingSet: HydraulicFittingSet) {
  const fittingsSets = getFittingsSets();
  fittingsSets.push(fittingSet);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fittingsSets));
}

export function removeFittingSetService(id: number) {
  const fittingsSets = getFittingsSets();
  const updatedFittingsSets = fittingsSets.filter(
    (fittingSet) => fittingSet.id !== id
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFittingsSets));
}

export function generateNextId() {
  const fittingsSets = getFittingsSets();
  return Math.max(...fittingsSets.map((fittingSet) => fittingSet.id)) + 1;
}

function initFittingsSetsStorage() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      {
        id: 1,
        name: "Conjunto de Peças",
        fittings: [1, 2, 3],
      },
      {
        id: 2,
        name: "Conjunto de Peças",
        fittings: [2, 3, 5],
      },
      {
        id: 3,
        name: "Conjunto de Peças",
        fittings: [7, 8, 9],
      },
    ])
  );
}

initFittingsSetsStorage();
