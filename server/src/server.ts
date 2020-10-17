import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express ();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333); //porta do localhost 

/* 
/users é um exemplo de RECURSO 
O caminho para chegar até ele é uma ROTA
GET(buscar), POST(criar), PUT(atualizar), DELETE são MÉTODOS
Corpo (Resquest Body): Dados para criação ou atualização de registros
Route Params: identificar qual recurso quero atualizar ou deletar  
Query Params: Paginação, filtros, ordenaçaõ..
*/
