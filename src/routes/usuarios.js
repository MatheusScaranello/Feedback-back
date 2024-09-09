const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuarios');

router.get('/usuario', usuariosController.getUsuarios);

router.get('/usuario/:local', usuariosController.getUsuarioByLocal);

router.post('/usuario', usuariosController.createUsuario);

router.put('/usuario/:id', usuariosController.updateUsuario);

router.delete('/usuario/:id', usuariosController.deleteUsuario);

module.exports = router;