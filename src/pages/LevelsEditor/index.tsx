import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Level } from "@/models/Level";
import LevelRepository from "@/repositories/LevelRepository";
import Table from "@/components/Table/Table";
import EntityFormDialog, { type FieldConfig } from "@/components/EntityFormDialog/EntityFormDialog";
import SectionMain from "@/components/SectionMain/SectionMain";

export default function LevelsEditor() {
  const [levels, setLevels] = useState<Level[]>([]);

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
  }

  return (
    <SectionMain>
      <Toaster />

      <div className="menu flex justify-between items-center py-4">
        <h1 className="font-semibold">Níveis</h1>
        <EntityFormDialog title="Adicionar Nível" fields={fields} onSubmit={handleCreate} />
      </div>

      <Table data={levels} />
    </SectionMain>
  );
}
