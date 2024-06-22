//Autenticar o médico e o enfermeiro
const UserMedico = require('../model/user_medico').UserMedico;
const UserEnfermagem = require('../model/user_enf').UserEnfermagem;

async function autenticar(req, res) {
    const { username, senha, area } = req.body;
    let usuario;

    if (area === 'medico') {
        usuario = await UserMedico.findOne({ where: { crm: username, senha } });
    } else {
        usuario = await UserEnfermagem.findOne({ where: { coren: username, senha, area } });
    }

    if (usuario) {
        req.session.autorizado = true;
        req.session.usuario = usuario;
        if (area === 'medico') {
            res.redirect('/homeMedico');
        } else {
            res.redirect('/homeEnfermagem');
        }
    } else {
        res.render('index.html', { erro_autenticacao: true });
    }
}

function verificarAutenticacao(req, res, next) {
    if (req.session.autorizado) {
        next();
    } else {
        res.redirect('/');
    }
}

function sair(req, res) {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    autenticar,
    verificarAutenticacao,
    sair
};

/*async function autenticar(req, res){
    let usuario = await UserMedico.findOne({where: {crm: req.body.username, senha: req.body.senha} });
    if (!usuario) {
        usuario = await UserEnfermagem.findOne({where: {coren: req.body.username, senha: req.body.senha} });
    }
    if(usuario !== null){
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/home');
    } else {
        res.render('index.html', {erro_autenticacao: true});
    }
}

function verificarAutenticacao(req, res, next){
    if(req.session.autorizado){
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = {
    autenticar, 
    verificarAutenticacao,
    sair
}*/
