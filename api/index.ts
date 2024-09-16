import { Client } from 'pg';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração do cliente PostgreSQL
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Função para conectar ao banco de dados
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Conectado ao banco de dados com sucesso!');
    
    // Aqui você pode executar consultas usando o cliente
    // Por exemplo: const res = await client.query('SELECT NOW()');
    // console.log(res.rows[0]);

  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } finally {
    await client.end();
  }
}

// Executa a conexão ao banco de dados
connectToDatabase();