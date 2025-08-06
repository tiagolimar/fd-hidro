import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import type { Level } from "@/models/Level";
import LevelRepository from "@/repositories/LevelRepository";
import Table from "@/components/Table/Table";

export default function LevelsEditor() {
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    LevelRepository.getAll().then(setLevels);
  }, []);

  return (
    <section className="container mx-auto">
      <Toaster />
      <h1 className="my-4">Níveis</h1>
      <Table data={levels} />
    </section>
  );
}
