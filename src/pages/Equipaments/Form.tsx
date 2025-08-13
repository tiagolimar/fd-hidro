import { useEffect, useState } from "react";
import InputField from "@/components/InputField/InputField";
import ButtonCancel from "@/components/ButtonCancel/ButtonCancel";
import ButtonSave from "@/components/ButtonSave/ButtonSave";

interface EquipamentFormProps {
    initialData: { name: string; abreviation: string; uhc: string };
    onSubmit: (data: { name: string; abreviation: string; uhc: string }) => void | Promise<void>;
    onCancel: () => void;
}

export default function EquipamentForm({ initialData, onSubmit, onCancel }: EquipamentFormProps) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        setData(initialData);
    }, [initialData]);

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
            <InputField id="name"
                label="Nome"
                value={data.name}
                onChange={handleChange}
            />
            <InputField id="abreviation"
                label="Abreviação"
                value={data.abreviation}
                onChange={handleChange}
            />
            <InputField id="uhc"
                label="UHC"
                value={data.uhc}
                onChange={handleChange}
            />
            <div className="flex gap-3">
                <ButtonCancel onClick={onCancel} />
                <ButtonSave onClick={handleSubmit} />
            </div>
        </form>
    );
}
