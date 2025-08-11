export interface TableCell {
  value: string | number;
  align?: 'left' | 'center' | 'right';
}

export interface IElement {
  toTableRow(): Record<string, TableCell>;
}