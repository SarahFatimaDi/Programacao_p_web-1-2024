const Paciente = require('../model/paciente');

function isMedico(req){
    return req.session.usuario && req.session.usuario.crm;
}

async function cadastrarPaciente(req, res) {
    if (!isMedico(req)){
        return res.status(404).send('Acesso negado.')
    }
    let paciente = {
        nome_paciente: req.body.nome_paciente,
        cns: req.body.cns,
        convenio: req.body.convenio,
        data_nascimento_paciente: req.body.data_nascimento_paciente,
        altura_paciente: req.body.altura_paciente,
        sexo: req.body.sexo,
        tipo_sang: req.body.tipo_sang,
        diabetes: req.body.diabetes,
        tipo_tratamento: req.body.tipo_tratamento,
        cid: req.body.cid,
        data_inicio_trat: req.body.data_inicio_trat,
        data_primeira_dialise_vida: req.body.data_primeira_dialise_vida,
        escala: req.body.escala,
        turno_local: req.body.turno_local
    };
    
    Paciente.create(paciente).then(()=> {
        res.render("index.html", {sucesso: true});
    }).catch((err)=>{
        console.log(err);
        res.render("index.html", {erro: true});
    });
}

async function listarPacientes(req, res) {
    try {
        const pacientes = await Paciente.findAll();
        res.render('listar_pacientes', { pacientes }); // Renderiza a página com os dados dos pacientes
    } catch (err) {
        res.status(500).send(err);
    }
}


async function atualizarPaciente(req, res) {
    if (!isMedico(req)){
        return res.status(404).send('Acesso negado.')
    }
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if(paciente){
            await paciente.update(req.body);
            res.send(paciente);
        } else{
            res.status(404).send('Paciente não encontrado.');
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

async function excluirPaciente(req, res) {
    if (!isMedico(req)){
        return res.status(404).send('Acesso negado.')
    }
    try {
        const resultado = await Paciente.destroy({where: {id: req.params.id} });
        if(resultado){
            res.send('Paciente exluído com sucesso');
        } else {
            res.status(404).send('Paciente não encontrado.');
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    cadastrarPaciente,
    listarPacientes,
    atualizarPaciente,
    excluirPaciente
}