export default function ButtonSave({ onClick }: { onClick: (e: React.FormEvent) => Promise<void> }) {
    return (
        <button type="submit" onClick={onClick} className="px-4 py-2 rounded bg-blue-600 text-white">
            Salvar
        </button>
    );
}
