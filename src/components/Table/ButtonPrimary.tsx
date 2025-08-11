export default function ButtonPrimary({ onClick }: { onClick: () => void }) {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" onClick={onClick}>Adicionar</button>
    )
}