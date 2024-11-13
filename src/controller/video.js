// Importa o pool de conexões com o banco de dados
const pool = require("../config/dbConfig");

// Função para obter o vídeo
async function getVideo(req, res) {
  try {
    // Executa a consulta SQL para selecionar todos os registros da tabela 'video'
    const result = await pool.query("SELECT * FROM video");
    
    // Se não encontrar nenhum vídeo, retorna uma resposta informando
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Nenhum vídeo encontrado." });
    }

    // Retorna os resultados com status 200 (OK) em formato JSON
    res.status(200).json(result.rows);
  } catch (error) {
    // Em caso de erro, retorna status 500 (Erro Interno do Servidor) com a mensagem do erro
    console.error("Erro ao obter vídeos: ", error);
    res.status(500).json({ error: "Erro ao obter vídeos. Tente novamente mais tarde." });
  }
}

// Função para editar o vídeo
async function editVideo(req, res) {
  const { idVideo, url } = req.body;

  // Validação básica de entrada

  // Validação da URL para garantir que seja um link do YouTube
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?=[^\w-]|$)/;
  if (!youtubeRegex.test(url)) {
    return res.status(400).json({ error: "A URL fornecida não é válida. Certifique-se de que seja um link do YouTube." });
  }

  try {
    // Executa a consulta SQL para atualizar a URL do vídeo com base no 'videoId'
    const result = await pool.query(
      "UPDATE video SET url = $1, idVideo = $2 RETURNING *", // Agora retornamos o vídeo atualizado
      [url, idVideo]
    );

    // Verifica se o vídeo foi encontrado e atualizado
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Vídeo não encontrado para atualização." });
    }

    // Retorna os resultados com status 200 (OK) em formato JSON
    res.status(200).json({ message: "Vídeo atualizado com sucesso!", video: result.rows[0] });
  } catch (error) {
    console.error("Erro ao atualizar vídeo: ", error);
    res.status(500).json({ error: "Erro ao atualizar o vídeo. Tente novamente mais tarde." });
  }
}

// Exporta as funções para uso em outros módulos
module.exports = {
  getVideo,
  editVideo
};
