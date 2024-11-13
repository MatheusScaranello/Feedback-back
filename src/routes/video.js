// Importa o módulo 'express' para criar rotas na aplicação
const express = require('express');
// Cria um novo roteador utilizando o Express
const router = express.Router();
// Importa o controlador de usuários que contém as funções de manipulação
const videoController = require('../controller/video.js');

// Define uma rota GET para obter todos os vídeos
router.get('/video', videoController.getVideo);

// Define uma rota GET para obter vídeos pelo ID, utilizando um parâmetro dinâmico
router.get('/video', videoController.editVideo);

module.exports = router;