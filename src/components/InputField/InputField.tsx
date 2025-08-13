export default function InputField({ id, name, label, value, onChange, required=true }: {
    id: string;
    name?: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-sm font-medium">{label}</label>
            <input
                id={id}
                name={name ?? id}
                type="text"
                value={value}
                onChange={onChange}
                className="rounded border p-2"
                required={required}
            />
        </div>
    );
}