const express = require('express');
const router = express.Router();
const autenticarController = require('../controllers/autenticar_Controller');

router.post('/cadastrar_usuario', autenticarController.autenticar);
router.get('/logout', autenticarController.sair);

module.exports = router;