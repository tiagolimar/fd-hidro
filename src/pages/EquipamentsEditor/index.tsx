import { useEffect, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Toaster, toast } from 'sonner';

import { Equipament } from '@/models/Equipament';
import EquipamentRepository from '@/repositories/EquipamentRepository';
import Table from '@/components/Table/Table';
import EntityFormDialog, { type FieldConfig } from '@/components/EntityFormDialog/EntityFormDialog';
import SectionMain from '@/components/SectionMain/SectionMain';
import { ENTITY_ADDED_SUCCESS } from '@/constants/messages';

export default function EquipamentsEditor() {
  const [equipaments, setEquipaments] = useState<Equipament[]>([]);
  const [editing, setEditing] = useState<Equipament | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    EquipamentRepository.getAll().then(setEquipaments);
  }, []);

  const fields: FieldConfig[] = [
    { name: 'name', label: 'Nome', type: 'text' },
    { name: 'abreviation', label: 'Abreviação', type: 'text' },
    { name: 'uhc', label: 'UHC', type: 'number', step: '1' },
  ];

  async function handleCreate(data: Record<string, string>) {
    const equip = new Equipament(
      data.name,
      data.abreviation,
      Number(data.uhc)
    );
    const created = await EquipamentRepository.create(equip);
    setEquipaments(prev => [...prev, created]);
    toast.success(ENTITY_ADDED_SUCCESS);
  }

  function openEdit(id: number) {
    const equip = equipaments.find(e => e.id === id);
    if (!equip) return;
    setEditing(equip);
    setIsEditOpen(true);
  }

  async function handleEdit(data: Record<string, string>) {
    if (!editing?.id) return;
    await EquipamentRepository.update(editing.id, {
      name: data.name,
      abreviation: data.abreviation,
      uhc: Number(data.uhc),
    });
    setEquipaments(prev =>
      prev.map(e =>
        e.id === editing.id
          ? new Equipament(data.name, data.abreviation, Number(data.uhc), editing.id)
          : e
      )
    );
    setIsEditOpen(false);
    setEditing(null);
  }

  function openDelete(id: number) {
    setDeleteId(id);
  }

  async function confirmDelete() {
    if (deleteId === null) return;
    await EquipamentRepository.delete(deleteId);
    setEquipaments(prev => prev.filter(e => e.id !== deleteId));
    setDeleteId(null);
  }

  const editInitialData = editing
    ? { name: editing.name, abreviation: editing.abreviation, uhc: String(editing.uhc) }
    : undefined;

  return (
    <SectionMain>
      <Toaster />
      <div className="menu flex justify-between items-center py-4">
        <h1 className="font-semibold">Peças</h1>
        <EntityFormDialog title="Adicionar Peça" fields={fields} onSubmit={handleCreate} />
      </div>
      <Table data={equipaments} onEdit={openEdit} onDelete={openDelete} />
      <EntityFormDialog
        title="Editar Peça"
        fields={fields}
        onSubmit={handleEdit}
        open={isEditOpen}
        onOpenChange={(open) => {
          setIsEditOpen(open);
          if (!open) setEditing(null);
        }}
        initialData={editInitialData}
        hideTrigger
        submitLabel="Salvar"
      />
      {deleteId !== null && (
        <Dialog open={true} onClose={() => setDeleteId(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-md w-full space-y-4 rounded border bg-white p-6">
              <DialogTitle className="text-lg font-bold">Confirmar exclusão</DialogTitle>
              <p>Deseja remover esta peça?</p>
              <div className="mt-2 flex gap-3">
                <button type="button" onClick={() => setDeleteId(null)} className="px-4 py-2 rounded border">
                  Cancelar
                </button>
                <button type="button" onClick={() => void confirmDelete()} className="px-4 py-2 rounded bg-red-600 text-white">
                  Excluir
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </SectionMain>
  );
}
