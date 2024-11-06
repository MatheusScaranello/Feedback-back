// dbConfig.js
const { Pool } = require('pg');

// Configuração do pool de conexões
const pool = new Pool({
  user: process.env.DB_USER || 'default',
  host: process.env.DB_HOST || 'ep-still-cell-a44lxtll-pooler.us-east-1.aws.neon.tech',
  database: process.env.DB_NAME || 'verceldb',
  password: process.env.DB_PASSWORD || 'wGaqVPJ9jzt8',
  port: process.env.DB_PORT || 5432,
  ssl: {
    rejectUnauthorized: false // Para aceitar certificados SSL autoassinados
  }
});

// Exporta o pool para uso em consultas diretas
module.exports = pool;