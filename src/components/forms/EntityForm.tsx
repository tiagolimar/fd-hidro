import { useEffect, useState } from "react";

interface EntityFormProps {
    initialValues: { name: string; height: string };
    onSubmit: (data: { name: string; height: string }) => void | Promise<void>;
}

export default function EntityForm({ initialValues, onSubmit }: EntityFormProps) {
    const [data, setData] = useState(initialValues);

    useEffect(() => {
        setData(initialValues);
    }, [initialValues]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await onSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={handleChange}
                    className="rounded border p-2"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="height" className="text-sm font-medium">Altura</label>
                <input
                    id="height"
                    name="height"
                    type="number"
                    step="any"
                    value={data.height}
                    onChange={handleChange}
                    className="rounded border p-2"
                    required
                />
            </div>
            <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                    Salvar
                </button>
            </div>
        </form>
    );
}
