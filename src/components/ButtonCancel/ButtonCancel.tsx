export default function ButtonCancel({ onClick }: { onClick: () => void }) {
    return (
        <button type="button" onClick={onClick} className="px-4 py-2 rounded border">
            Cancelar
        </button>
    );
}
