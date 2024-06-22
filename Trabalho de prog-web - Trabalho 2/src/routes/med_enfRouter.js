const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/user_med_enf_controller');

router.post('/cadastrar_usuario', usuarioController.cadastrarMedico);
router.post('/cadastrar_usuario', usuarioController.cadastrarEnf);
//router.post('/exames_sangue', userMedEnfController.adicionarExameSangue);

module.exports = router;