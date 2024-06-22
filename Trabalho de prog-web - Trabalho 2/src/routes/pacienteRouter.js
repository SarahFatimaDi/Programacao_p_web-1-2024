const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/user_paciente_controller');
const { verificarAutenticacao } = require('../controllers/autenticar_Controller');

router.post('/cadastrar_paciente', verificarAutenticacao, pacienteController.cadastrarPaciente);
router.get('/api/pacientes', verificarAutenticacao, pacienteController.listarPacientes);
router.put('/api/pacientes/:id', verificarAutenticacao, pacienteController.atualizarPaciente);
router.delete('/api/pacientes/:id', verificarAutenticacao, pacienteController.excluirPaciente);

module.exports = router;