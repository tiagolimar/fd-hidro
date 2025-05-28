
type FieldProps = {
    type: string;
    name: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Field({type, value, name, onChange} : FieldProps) {
    return (
        <div className="mb-4 border-l-2 border-gray-300 w-full">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={name}
            >
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input className="bg-white w-100" id={name} value={value} type={type} onChange={onChange} />
        </div>
    );
}

export default Field;
