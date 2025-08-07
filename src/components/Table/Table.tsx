interface TableProps {
    data: Record<string, string | number>[];
}

const Table = ({ data }: TableProps) => {
    const columns = Object.keys(data[0] ?? {});

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
                    const values = Object.values(row);

                    return (
                        <tr key={key}>
                            {values.map((value, valueIndex) => (
                                <td
                                    key={columns[valueIndex] ?? valueIndex}
                                    className="border border-stone-300 p-2"
                                >
                                    {value}
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
