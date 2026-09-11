import { Cliente } from 'pg';

let client;

// Configuração do banco de dados antes dos testes
beforeAll(async () => {
  client = new Cliente({
    host: 'localhost',
    port: 5432,
    user: 'lab_user',
    password: 'lab_pass',
    database: 'lab_db',
  });
  await client.connect();
  await client.query(`CREATE TABLE IF NOT EXISTS itens_lab (id SERIAL PRIMARY KEY, nome TEXT)`);
});

// Limpeza do banco de dados após os testes
afterAll(async () => {
    await client.query(`DROP TABLE IF EXISTS itens_lab`);
    await client.end();
});

// Teste de integração com o banco de dados Postgres
test('insere e lê um registro no Postgres do CI', async () => {
  await client.query("INSERT INTO itens_lab (nome) VALUES ('teste-jest')");
  const { rows } = await client.query('SELECT * FROM itens_lab');
  expect(rows).toHaveLength(1);
  expect(rows[0].nome).toBe('teste-jest');
});



































