//Importa o pool de conexões com o banco de dados
const pool = require("../config/dbConfig");

async function getUsuarios(req, res) {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUsuarioById(req, res) {
    const id = req.params.id;
    try {
        const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

async function createUsuario(req, res) {
    const { nome, local, nota, observacao, data } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO usuarios (nome, local, nota, observacao, data) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [nome, local, nota, observacao, data]
        );
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateUsuario(req, res) {
    const id = req.params.id;
    const { nome, local, nota, observacao, data } = req.body;
    try {
        const result = await pool.query(
            "UPDATE usuarios SET nome = $1, local = $2, nota = $3, observacao = $4, data = $5 WHERE id = $6 RETURNING *",
            [nome, local, nota, observacao, data, id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteUsuario(req, res) {
    const id = req.params.id;
    try {
        await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};