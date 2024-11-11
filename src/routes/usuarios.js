// Importa o módulo 'express' para criar rotas na aplicação
const express = require('express');
// Cria um novo roteador utilizando o Express
const router = express.Router();
// Importa o controlador de usuários que contém as funções de manipulação
const usuariosController = require('../controller/usuarios');

// Define uma rota GET para obter todos os usuários
router.get('/usuario', usuariosController.getUsuarios);

// Define uma rota GET para obter usuários pelo local, utilizando um parâmetro dinâmico
router.get('/usuario/:local', usuariosController.getUsuarioByLocal);

// Define uma rota POST para criar um novo usuário
router.post('/usuario', usuariosController.createUsuario);

// Define uma rota PUT para atualizar um usuário existente, utilizando um parâmetro dinâmico para o ID
router.put('/usuario/:id', usuariosController.updateUsuario);

// Define uma rota DELETE para remover um usuário, utilizando um parâmetro dinâmico para o ID
router.delete('/usuario/:id', usuariosController.deleteUsuario);

// Exporta o roteador para que possa ser utilizado em outros módulos
module.exports = router;
