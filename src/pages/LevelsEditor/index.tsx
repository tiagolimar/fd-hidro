import { useEffect, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Toaster, toast } from "sonner";
import { Level } from "@/models/Level";
import LevelRepository from "@/repositories/LevelRepository";
import Table from "@/components/Table/Table";
import EntityFormDialog, { type FieldConfig } from "@/components/EntityFormDialog/EntityFormDialog";
import SectionMain from "@/components/SectionMain/SectionMain";
import { ENTITY_ADDED_SUCCESS } from "@/constants/messages";

export default function LevelsEditor() {
    const [levels, setLevels] = useState<Level[]>([]);
    const [editing, setEditing] = useState<Level | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    useEffect(() => {
        LevelRepository.getAll().then(setLevels);
    }, []);

    const fields: FieldConfig[] = [
        { name: "name", label: "Nome", type: "text" },
        { name: "height", label: "Altura", type: "number", step: "any" },
    ];

    async function handleCreate(data: Record<string, string>) {
        const level = new Level(data.name, Number(data.height));
        const created = await LevelRepository.create(level);
        setLevels(prev => [...prev, created]);
        toast.success(ENTITY_ADDED_SUCCESS);
    }

    function openEdit(id: number) {
        const level = levels.find(l => l.id === id);
        if (!level) return;
        setEditing(level);
        setIsEditOpen(true);
    }

    async function handleEdit(data: Record<string, string>) {
        if (!editing?.id) return;
        await LevelRepository.update(editing.id, {
            name: data.name,
            height: Number(data.height),
        });
        setLevels(prev =>
            prev.map(l =>
                l.id === editing.id
                    ? new Level(data.name, Number(data.height), editing.id)
                    : l
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
        await LevelRepository.delete(deleteId);
        setLevels(prev => prev.filter(l => l.id !== deleteId));
        setDeleteId(null);
    }

    const editInitialData = editing
        ? { name: editing.name, height: String(editing.height) }
        : undefined;

    return (
        <SectionMain>
            <Toaster />
            <div className="menu flex justify-between items-center py-4">
                <h1 className="font-semibold">Níveis</h1>
                <EntityFormDialog title="Adicionar Nível" fields={fields} onSubmit={handleCreate} />
            </div>
            <Table data={levels} onEdit={openEdit} onDelete={openDelete} />
            <EntityFormDialog
                title="Editar Nível"
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
                            <p>Deseja remover este nível?</p>
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
