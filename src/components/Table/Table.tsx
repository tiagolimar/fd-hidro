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
            const rowId = row["ID"];
            const key = typeof rowId === "string" || typeof rowId === "number" ? rowId : index;
            const values = Object.values(row);
  
            return (
              <tr className="even:bg-stone-100" key={key}>
                {values.map((value, valueIndex) => {
                  const centered = typeof value === "number"?"text-center":"";
                  return (<td
                    key={columns[valueIndex] ?? valueIndex}
                    className={`${centered} border border-stone-300 p-2`}
                  >
                    {value}
                  </td>)
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  