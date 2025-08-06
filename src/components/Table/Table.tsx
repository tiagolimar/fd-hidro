interface TableProps {
    data: Record<string, unknown>[];
}

const Table = ({ data }: TableProps) => {
    const columns = Object.keys(data[0] ?? {}).filter((key) => {
        const value = data[0]?.[key];
        return key !== "id" && (typeof value === "string" || typeof value === "number");
    });

    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column} className="border border-stone-300 p-2">{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => {
                    const rowId = row["id"];
                    const key = typeof rowId === "string" || typeof rowId === "number" ? rowId : index;

                    return (
                        <tr key={key}>
                            {columns.map((column) => (
                                <td key={column} className="border border-stone-300 p-2">
                                    {row[column] as string | number}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
