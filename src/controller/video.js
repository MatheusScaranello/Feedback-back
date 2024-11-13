// Importa o pool de conexões com o banco de dados
const pool = require("../config/dbConfig");

async function getVideo(req, res) {
    try {
      // Executa uma consulta SQL para selecionar todos os registros da tabela 'usuario'
      const result = await pool.query("SELECT * FROM video");
      // Retorna os resultados com status 200 (OK) em formato JSON
      res.status(200).json(result.rows);
    } catch (error) {
      // Em caso de erro, retorna status 500 (Erro Interno do Servidor) com a mensagem do erro
      res.status(500).json({ error: error.message });
    }
  }

  async function editVideo(req, res) {
    try {
      const { videoId, url } = req.body;
      const result = await pool.query(
        "UPDATE video SET url = $1, idVideo = $2",
        [url, videoId]
      );
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Exporta as funções para uso em outros módulos
module.exports = {
    getVideo,
    editVideo
  };