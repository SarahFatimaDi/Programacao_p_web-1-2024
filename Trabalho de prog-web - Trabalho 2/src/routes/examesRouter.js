const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_med_enf_controller');
const controll = require('../controllers/user_paciente_controller');

router.post('/exames_sangue', controller.adicionarExameSangue); // Define a rota para adicionar exame de sangue
router.post('/prescricao_dialise', controller.adicionarPrescricaoDialise); // Define a rota para adicionar prescrição de diálise
router.post('/sessao_hemodialise', controller.adicionarSessaoHemodialise); // Define a rota para adicionar sessão de hemodiálise
router.post('/medicacoes_dialise', controller.adicionarMedicacaoDialise); // Define a rota para adicionar medicações durante a diálise

router.get('/listar_pacientes', controll.listarPacientes); // Nova rota para listar pacientes



module.exports = router;
