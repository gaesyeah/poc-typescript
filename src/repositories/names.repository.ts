import { db } from "../database/database.connection";
import { CreateName, Name, RowCount } from "../protocols/names.protocols";

const create = (body: CreateName) => {
  const { name } = body;
  return db.query(`INSERT INTO pages (name) VALUES ($1);`, [name]);
};

const read = () => {
  return db.query<Name>(`SELECT * FROM pages;`);
};

const update = (object: Name) => {
  const { id, name } = object; 
  return db.query<RowCount>(`UPDATE pages SET name = $2 WHERE id = $1;`, [id, name]);
};

const destroy = (id: string) => {
  return db.query<RowCount>(`DELETE FROM pages WHERE id = $1;`, [id]);
};

const namesRepository = { create, read, update, destroy };
export default namesRepository;