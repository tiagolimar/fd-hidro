
type FieldProps = {
    type: string;
    name: string;
};

function Field({type, name} : FieldProps) {
    return (
        <div className="mb-4 border-l-2 border-gray-300">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={name}
            >
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input className="bg-white w-100" id={name} type={type} />
        </div>
    );
}

export default Field;
