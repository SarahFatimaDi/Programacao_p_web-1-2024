const Usuario_med = require('../model/user_medico');
const Usuario_enfermagem = require('../model/user_enf');
const Paciente = require('../model/paciente');
const ExameSang = require('../model/exame_sang_obgtorio');
const PrescricaoDialise = require('../model/prescricao_dialise'); // Adicione o modelo de prescrição de diálise
const SessaoHemodialise = require('../model/sessao_hemodialise'); // Adicione o modelo de sessão de hemodiálise
const MedicacaoDialise = require('../model/medicacoes_dialise'); // Adicione o modelo de medicações feitas durante a diálise

// Função para cadastrar médico
function cadastrarMedico(req, res) {
    let medico = {
        crm: req.body.crm,
        senha: req.body.senha,
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento
    };

    Usuario_med.create(medico).then(() => {
        res.redirect('/medico/area'); // Redireciona para a área do médico após o cadastro
    }).catch((err) => {
        console.log(err);
        res.render("index.html", { erro: true });
    });
}

// Função para cadastrar enfermeiro
function cadastrarEnf(req, res) {
    let enfermagem = {
        coren: req.body.coren,
        senha: req.body.senha,
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento
    };

    Usuario_enfermagem.create(enfermagem).then(() => {
        res.redirect('/enfermagem/area'); // Redireciona para a área de enfermagem após o cadastro
    }).catch((err) => {
        console.log(err);
        res.render("index.html", { erro: true });
    });
}

// Função para cadastrar paciente
function cadastrarPaciente(req, res) {
    let paciente = {
        nome: req.body.nome,
        convenio: req.body.convenio,
        cns: req.body.cns,
        data_nascimento: req.body.data_nascimento,
        altura: req.body.altura,
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

    Paciente.create(paciente).then((newPaciente) => {
        res.redirect(`/exames_sangue.html?pacienteId=${newPaciente.id}`); // Redireciona para a página de exames de sangue com o ID do paciente
    }).catch((err) => {
        console.log(err);
        res.render("index.html", { erro: true });
    });
}

// Função para adicionar exame de sangue
function adicionarExameSangue(req, res) {
    const pacienteId = req.body.pacienteId;
    const exame = {
        pacienteId: pacienteId,
        data_resultado: req.body.data_resultado,
        ktv: req.body.ktv,
        std_ktv: req.body.std_ktv,
        ureia_pre: req.body.ureia_pre,
        ureia: req.body.ureia,
        hb: req.body.hb,
        ht: req.body.ht,
        ferretina: req.body.ferretina,
        sat_tranf: req.body.sat_tranf,
        calcio: req.body.calcio,
        fosforo: req.body.fosforo,
        pth: req.body.pth,
        tgp: req.body.tgp,
        k: req.body.k,
        glicose: req.body.glicose,
        glic_jy: req.body.glic_jy
    };

    ExameSang.create(exame).then(() => {
        res.redirect(`/prescricao_dialise.html?pacienteId=${pacienteId}`); // Redireciona para a prescrição de diálise com o ID do paciente
    }).catch((err) => {
        console.log(err);
        res.render("exames_sangue.html", { erro: true, pacienteId: pacienteId });
    });
}

// Função para adicionar prescrição de diálise
function adicionarPrescricaoDialise(req, res) {
    const pacienteId = req.body.pacienteId;
    const prescricao = {
        pacienteId: pacienteId,
        dialisador: req.body.dialisador,
        heparina: req.body.heparina,
        bicarbonato: req.body.bicarbonato,
        prime: req.body.prime,
        tipo_acesso: req.body.tipo_acesso,
        agulha: req.body.agulha,
        fluxo_do_sangue: req.body.fluxo_do_sangue,
        sodio: req.body.sodio,
        peso_seco: req.body.peso_seco,
        duracao: req.body.duracao,
        uf_maxima: req.body.uf_maxima,
        perfil_de_uf: req.body.perfil_de_uf
    };

    PrescricaoDialise.create(prescricao).then(() => {
        res.redirect(`/sessao_hemodialise.html?pacienteId=${pacienteId}`); // Redireciona para a sessão de hemodiálise com o ID do paciente
    }).catch((err) => {
        console.log(err);
        res.render("prescricao_dialise.html", { erro: true, pacienteId: pacienteId });
    });
}

// Função para adicionar sessão de hemodiálise
function adicionarSessaoHemodialise(req, res) {
    const pacienteId = req.body.pacienteId;
    const sessao = {
        pacienteId: pacienteId,
        data_dia: req.body.data_dia,
        inicio_hemo: req.body.inicio_hemo,
        pa_pre_hd: req.body.pa_pre_hd,
        fim_hemo: req.body.fim_hemo,
        peso_pre_hd: req.body.peso_pre_hd,
        uf_programada: req.body.uf_programada,
        exesso_kg: req.body.exesso_kg,
        temperatura_paciente: req.body.temperatura_paciente,
        primeira_hora: req.body.primeira_hora,
        segunda_hora: req.body.segunda_hora,
        terceira_hora: req.body.terceira_hora,
        quarta_hora: req.body.quarta_hora,
        pa: req.body.pa,
        fc: req.body.fc,
        fluxo_sang: req.body.fluxo_sang,
        pressao_art_acesso: req.body.pressao_art_acesso,
        pressao_ven_acesso: req.body.pressao_ven_acesso,
        ptm: req.body.ptm,
        fluxo_dialisato: req.body.fluxo_dialisato,
        teste_reuso: req.body.teste_reuso,
        pa_pos_hd: req.body.pa_pos_hd,
        peso_pos_h: req.body.peso_pos_h,
        kt_v_online: req.body.kt_v_online,
        vol_subst: req.body_vol_subst,
        cod_tec_enf: req.body.tec_enf,
        intercorrencia: req.body.intercorrencia
    };

    SessaoHemodialise.create(sessao).then(() => {
        res.redirect(`/medicacoes_dialise.html?pacienteId=${pacienteId}`); // Redireciona para a medicações feitas durante a diálise com o ID do paciente
    }).catch((err) => {
        console.log(err);
        res.render("sessao_hemodialise.html", { erro: true, pacienteId: pacienteId });
    });
}

// Função para adicionar medicações feitas durante a diálise
function adicionarMedicacaoDialise(req, res) {
    const pacienteId = req.body.pacienteId;
    const medicacao = {
        pacienteId: pacienteId,
        data: req.body.data,
        paricalcitol: req.body.paricalcitol,
        ferro: req.body.ferro,
        eritopoetina: req.body.eritopoetina
    };

    MedicacaoDialise.create(medicacao).then(() => {
        res.redirect(`/paciente.html?pacienteId=${pacienteId}`); // Redireciona para a página do paciente com o ID do paciente
    }).catch((err) => {
        console.log(err);
        res.render("medicacoes_dialise.html", { erro: true, pacienteId: pacienteId });
    });
}

module.exports = {
    cadastrarMedico,
    cadastrarEnf,
    cadastrarPaciente,
    adicionarExameSangue,
    adicionarPrescricaoDialise,
    adicionarSessaoHemodialise,
    adicionarMedicacaoDialise
};
