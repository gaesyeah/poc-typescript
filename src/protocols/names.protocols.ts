export type Name = { id: number | string, name: string };

export type CreateName = Omit<Name, 'id'>;

export type RowCount = { rowCount: number };