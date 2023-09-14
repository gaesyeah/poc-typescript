export type Name = { id: number, name: string };

export type CreateName = Omit<Name, 'id'>;

export type RowCount = { rowCount: number };