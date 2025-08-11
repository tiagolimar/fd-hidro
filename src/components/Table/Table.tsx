import type { IElement } from "@/models/InterfaceElement";

interface TableProps {
    data: IElement[];
  }
  
  const Table = ({ data }: TableProps) => {
    const dataToRender = data.map((item) => item.toTableRow());
    const columns = Object.keys(dataToRender[0] ?? {});
  
    return (
      <table className="table-auto w-full">
        <thead className="bg-stone-200">
          <tr>
            {columns.map((column) => (
              <th key={column} className="border border-stone-300 p-2">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataToRender.map((row, index) => {
            const rowId = row["ID"]?.value;
            const key = typeof rowId === "string" || typeof rowId === "number" ? rowId : index;

            return (
              <tr className="even:bg-stone-100" key={key}>
                {columns.map((column) => {
                  const cell = row[column];
                  const alignClass = cell?.align ? `text-${cell.align}` : "";
                  return (
                    <td
                      key={column}
                      className={`${alignClass} border border-stone-300 p-2`}
                    >
                      {cell?.value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  