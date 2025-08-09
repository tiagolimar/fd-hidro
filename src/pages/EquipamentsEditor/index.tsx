import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';

import { Equipament } from '@/models/Equipament';
import EquipamentRepository from '@/repositories/EquipamentRepository';
import Table from '@/components/Table/Table';
import ButtonPrimary from '@/components/Table/ButtonPrimary';

export default function EquipamentsEditor() {
  const [equipaments, setEquipaments] = useState<Equipament[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newEquipament, setNewEquipament] = useState<Equipament>(
    new Equipament('', '', 0)
  );

  useEffect(() => {
    EquipamentRepository.getAll().then(setEquipaments);
  }, []);

  function handleChange<K extends keyof Equipament>(key: K, value: Equipament[K]) {
    setNewEquipament(prev => new Equipament(
      key === 'name' ? String(value) : prev.name,
      key === 'abreviation' ? String(value) : prev.abreviation,
      key === 'uhc' ? Number(value) : prev.uhc,
      prev.id
    ));
  }

  async function handleCreate() {
    const created = await EquipamentRepository.create(newEquipament);
    setEquipaments(prev => [...prev, created]);
    setIsOpen(false);
    setNewEquipament(new Equipament('', '', 0));
  }

  return (
    <section className="container mx-auto pb-4">
      <Toaster />
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg w-full space-y-4 rounded border bg-white p-6">
            <DialogTitle className="text-lg font-bold">Adicionar Peça</DialogTitle>
            <Description>Insira os dados da peça</Description>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => { e.preventDefault(); void handleCreate(); }}
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                <input
                  id="name"
                  type="text"
                  value={newEquipament.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="rounded border p-2"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="abreviation" className="text-sm font-medium">Abreviação</label>
                <input
                  id="abreviation"
                  type="text"
                  value={newEquipament.abreviation}
                  onChange={(e) => handleChange('abreviation', e.target.value)}
                  className="rounded border p-2"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="uhc" className="text-sm font-medium">UHC</label>
                <input
                  id="uhc"
                  type="number"
                  step="any"
                  value={String(newEquipament.uhc)}
                  onChange={(e) => handleChange('uhc', Number(e.target.value))}
                  className="rounded border p-2"
                  required
                />
              </div>

              <div className="mt-2 flex gap-3">
                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded border">
                  Cancelar
                </button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                  Adicionar
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="menu flex justify-between items-center py-4">
        <h1 className="font-semibold">Menu de Edição de Peças Hidráulicas</h1>
        <ButtonPrimary onClick={() => setIsOpen(true)} />
      </div>

      <Table data={equipaments} />
    </section>
  );
}
