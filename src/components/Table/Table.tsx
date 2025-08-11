import type { IElement } from "@/models/InterfaceElement";

interface TableProps {
  data: IElement[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const Table = ({ data, onEdit, onDelete }: TableProps) => {
  const dataToRender = data.map((item) => item.toTableRow());
  const columns = Object.keys(dataToRender[0] ?? {});

  return (
    <table className="table-auto w-full">
      <thead className="bg-stone-200">
        <tr>
          {columns.map((column) => (
            <th key={column} className="border border-stone-300 p-2">
              {column}
            </th>
          ))}
          {(onEdit || onDelete) && (
            <th className="border border-stone-300 p-2">Ações</th>
          )}
        </tr>
      </thead>
      <tbody>
        {dataToRender.map((row, index) => {
          const rowId = row["ID"]?.value;
          const key =
            typeof rowId === "string" || typeof rowId === "number"
              ? rowId
              : index;
          const idNumber = typeof rowId === "number" ? rowId : Number(rowId);

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
              {(onEdit || onDelete) && (
                <td className="border border-stone-300 p-2 text-center space-x-2">
                  {onEdit && (
                    <button
                      type="button"
                      onClick={() => onEdit(idNumber)}
                      className="px-1"
                    >
                      ✏️
                    </button>
                  )}
                  {onDelete && (
                    <button
                      type="button"
                      onClick={() => onDelete(idNumber)}
                      className="px-1"
                    >
                      🗑️
                    </button>
                  )}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
