import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';

import ButtonPrimary from '@/components/Table/ButtonPrimary';

export interface FieldConfig {
    name: string;
    label: string;
    type: string;
    step?: string;
}

interface EntityFormDialogProps {
    fields: FieldConfig[];
    onSubmit: (data: Record<string, string>) => Promise<void> | void;
    title: string;
    initialData?: Record<string, string>;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    hideTrigger?: boolean;
    submitLabel?: string;
}

export default function EntityFormDialog({
    fields,
    onSubmit,
    title,
    initialData,
    open,
    onOpenChange,
    hideTrigger,
    submitLabel = 'Adicionar',
}: EntityFormDialogProps) {
    const controlled = open !== undefined && onOpenChange !== undefined;
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlled ? open : internalOpen;
    const setIsOpen = controlled ? onOpenChange! : setInternalOpen;

    const emptyData = useMemo(
        () =>
            fields.reduce<Record<string, string>>((acc, field) => {
                acc[field.name] = '';
                return acc;
            }, {}),
        [fields]
    );

    const [data, setData] = useState<Record<string, string>>(initialData ?? emptyData);

    useEffect(() => {
        setData(initialData ?? emptyData);
    }, [initialData, emptyData]);

    function handleChange(name: string, value: string) {
        setData(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit() {
        await onSubmit(data);
        setData(emptyData);
        setIsOpen(false);
    }

    return (
        <>
            {!hideTrigger && <ButtonPrimary onClick={() => setIsOpen(true)} />}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg w-full space-y-4 rounded border bg-white p-6">
                        <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
                        <Description>Insira os dados</Description>
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={(e) => { e.preventDefault(); void handleSubmit(); }}
                        >
                            {fields.map((field) => (
                                <div key={field.name} className="flex flex-col">
                                    <label htmlFor={field.name} className="text-sm font-medium">{field.label}</label>
                                    <input
                                        id={field.name}
                                        type={field.type}
                                        step={field.step}
                                        value={data[field.name]}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                        className="rounded border p-2"
                                        required
                                    />
                                </div>
                            ))}

                            <div className="mt-2 flex gap-3">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded border">
                                    Cancelar
                                </button>
                                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                                    {submitLabel}
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
