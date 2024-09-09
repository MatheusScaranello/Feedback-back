// Importação do módulo dotenv para carregar variáveis de ambiente
require("dotenv").config();
const express = require("express");
const cors = require('cors');

// Importação dos arquivos de rota para usuários
const usuariosRouter = require("./routes/usuarios");

// Criação de uma instância do Express
const app = express();

const port = process.env.PORT || 4000;
app.use(cors({ origin: 'http://localhost:8081' }));
// Configuração do Express para receber dados em JSON
app.use(express.json());

// Configuração do Express para usar as rotas de usuários
app.use("/usuarios", usuariosRouter);

// Inicialização do servidor Express
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Rota para a raiz do servidor
app.get("/", (req, res) => {
    res.json({ message: "API de exercícios funcionando!" });
  }
  );