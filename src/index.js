// Importação do módulo dotenv para carregar variáveis de ambiente
require("dotenv").config();
const express = require("express");
const cors = require('cors');
// Importação dos arquivos de rota para exercícios, grupos musculares e usuários
const UsuariosRoutes = require("./routes/usuarios");

// Criação de uma instância do aplicativo Express
const app = express();

const port = process.env.PORT || 4000;
app.use(cors());
// Middleware para processar corpos de requisição no formato JSON
app.use(express.json());

// Roteamento para os endpoints relacionados a usuários
app.use("/", UsuariosRoutes);

// Rota para a raiz do servidor
app.get("/", (req, res) => {
  res.json({ message: "API funcionando!" });
}
);

// Inicialização do servidor, que escuta as requisições na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});