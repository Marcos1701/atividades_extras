const express = require('express');
const app = express();
const port = 3000;
const postgres = require('postgres');

const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'hehe',
  username: 'postgres',
  password: 'postgres' // Senha do usuário do banco de dados
});

const retorno = async () => {
  const result = await sql`SELECT * FROM HOSPEDAGEM`;
  console.log(result);
};

async function main() {
  // Inserir um novo registro
  const novoRegistro = {
    cod_hospeda: '2',
    cod_hosp: '3',
    num:102,
    dt_ent: '2023-05-22',
    dt_sai: null
    // Adicione outras colunas e valores aqui
  };

  const inserirQuery = sql`INSERT INTO HOSPEDAGEM ${sql(novoRegistro)}`;
  await inserirQuery;

  // Atualizar um registro existente
  const registroAtualizado = {
    cod_hospeda: 1, // ID do registro a ser atualizado
    cod_hosp: '2',
    num:'103'
  };

  const atualizarQuery = sql`
    UPDATE HOSPEDAGEM
    SET ${sql(registroAtualizado)}
    WHERE id = ${registroAtualizado.id}
  `;
  await atualizarQuery;

  // Executar consulta após a inserção e atualização
  const result = await sql`SELECT * FROM HOSPEDAGEM`;
  console.log(result);
}

main();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
