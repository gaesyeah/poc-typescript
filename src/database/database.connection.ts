import pg, { DatabaseError, PoolClient } from 'pg';

const configDatabase = {
  connectionString: 'postgres://postgres:postgres@localhost:5432/namesBook'
};
const { Pool } = pg;

export const db = new Pool(configDatabase);

db.connect((error: DatabaseError, client: PoolClient, done: () => void) => {
  if (error) return console.log('Erro ao conectar ao banco de dados:', error);
  console.log('Conexão bem-sucedida com o banco de dados PostgreSQL');
  done();
});
