import express from 'express';
import './database/database.connection';
//-------------------------------------------------------
import indexRouter from './routes/index.routes';

const app = express();
app.use(express.json(), indexRouter);

const port = 5000;
app.listen(port, () => console.log(`Rodando em http://localhost:${port}`));