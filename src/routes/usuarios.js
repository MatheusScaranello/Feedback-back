const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuarios');

router.get('/', usuariosController.getUsuarios);

router.get('/:id', usuariosController.getUsuarioById);

router.post('/', usuariosController.createUsuario);

router.put('/:id', usuariosController.updateUsuario);

router.delete('/:id', usuariosController.deleteUsuario);

module.exports = router;