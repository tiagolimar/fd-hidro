type genericObject = {
    id: number;
    [key: string]: string | number;
}

interface TableProps {
    data: genericObject[];
    columns: {
        id: string;
        name: string;
    }[];
}

const Table = ({ data, columns }: TableProps) => {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.id} className="border border-stone-300 p-2">{column.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        {columns.map((column) => (
                            <td key={column.id} className="border border-stone-300 p-2">{row[column.id]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
