// Importa o pool de conexões com o banco de dados
const pool = require("../config/dbConfig");

// Função assíncrona para obter todos os usuários
async function getUsuarios(req, res) {
  try {
    // Executa uma consulta SQL para selecionar todos os registros da tabela 'usuario'
    const result = await pool.query("SELECT * FROM usuario");
    // Retorna os resultados com status 200 (OK) em formato JSON
    res.status(200).json(result.rows);
  } catch (error) {
    // Em caso de erro, retorna status 500 (Erro Interno do Servidor) com a mensagem do erro
    res.status(500).json({ error: error.message });
  }
}

// Função assíncrona para obter usuários por local
async function getUsuarioByLocal(req, res) {
    // Extrai o parâmetro 'local' da requisição
    const local = req.params.local;
    try {
        // Executa uma consulta SQL para selecionar usuários com o local específico
        const result = await pool.query("SELECT * FROM usuario WHERE local = $1", [local]);
        // Retorna os resultados com status 200 (OK) em formato JSON
        res.status(200).json(result.rows);
    } catch (error) {
        // Em caso de erro, retorna status 500 (Erro Interno do Servidor) com a mensagem do erro
        res.status(500).json({ error: error.message });
    }    
}

// Função assíncrona para criar um novo usuário
async function createUsuario(req, res) {
    // Extrai os campos do corpo da requisição
    const { local, nota, observacao, data } = req.body;
    try {
        // Executa uma consulta SQL para inserir um novo registro na tabela 'usuario'
        const result = await pool.query(
            "INSERT INTO usuario (local, nota, observacao, data) VALUES ($1, $2, $3, $4) RETURNING *",
            [local, nota, observacao, data]
        );
        // Retorna o novo registro criado com status 201 (Criado) em formato JSON
        res.status(201).json(result.rows);
    } catch (error) {
        // Em caso de erro, retorna status 500 (Erro Interno do Servidor) com a mensagem do erro
        res.status(500).json({ error: error.message });
    }
}

// Função assíncrona para atualizar um usuário existente
async function updateUsuario(req, res) {
    // Extrai o ID do usuário a ser atualizado a partir dos parâmetros da requisição
    const id = req.params.id;
    // Extrai os campos do corpo da requisição
    const { local, nota, observacao, data } = req.body;
    try {
        // Executa uma consulta SQL para atualizar um registro na tabela 'usuario'
        const result = await pool.query(
            "UPDATE usuario SET local = $1, nota = $2, observacao = $3, data = $4 WHERE id = $5 RETURNING *",
            [local, nota, observacao, data, id]
        );
        // Retorna o registro atualizado com status 200 (OK) em formato JSON
        res.status(200).json(result.rows);
    } catch (error) {
        // Em caso de erro, retorna status 500 (Erro Interno do Servidor) com a mensagem do erro
        res.status(500).json({ error: error.message });
    }
}

// Função assíncrona para deletar um usuário
async function deleteUsuario(req, res) {
    // Extrai o ID do usuário a ser deletado a partir dos parâmetros da requisição
    const id = req.params.id;
    try {
        // Executa uma consulta SQL para deletar um registro na tabela 'usuario'
        await pool.query("DELETE FROM usuario WHERE id = $1", [id]);
        // Retorna status 204 (Sem Conteúdo) indicando que a operação foi bem-sucedida
        res.status(204).end();
    } catch (error) {
        // Em caso de erro, retorna status 500 (Erro Interno do Servidor) com a mensagem do erro
        res.status(500).json({ error: error.message });
    }
}

// Exporta as funções para uso em outros módulos
module.exports = {
  getUsuarios,
  getUsuarioByLocal,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
