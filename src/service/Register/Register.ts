// refatorando o código abaixo para o arquivo Register.ts ele generaliza o comportamento de CRUD usando localStorage

const STORAGE_KEY = "fittingSets";

export function getFittingsSets(): any[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addFittingSetService(fittingSet: any) {
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
  const dataFittingsSets: any[] = [
    {
      id: 1,
      name: "WC",
      fittingsIds: [1, 2, 4, 5],
    },
    {
      id: 2,
      name: "Lavabo",
      fittingsIds: [1, 2, 4],
    },
    {
      id: 3,
      name: "Área de Serviço e Cozinha",
      fittingsIds: [7, 10, 9],
    },
  ]
  
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(dataFittingsSets)
  );
}

initFittingsSetsStorage();
