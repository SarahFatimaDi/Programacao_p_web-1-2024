//Aqui será os dados das prescrições da diálise do paciente.
//Provavelmente fará uma ligação com a table paciente
const Sequelize = require('sequelize');
const database = require('../db');

const Dados_dialise = database.define('dados_dialise', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dialisador: {
        type: Sequelize.STRING,
        allowNull: false
    },
    heparina: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bicarbonato: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prime: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo_acesso: {//venoso ou não
        type: Sequelize.STRING,
        allowNull: false
    },
    agulha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fluxo_do_sangue: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sodio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    peso_seco: {
        type: Sequelize.FLOAT,//fazer um teste para ver se dá certo
        allowNull: false
    },
    duracao: {//quantas horas será feito por dia
        type: Sequelize.STRING,
        allowNull: false
    },
    uf_maxima: {
        type: Sequelize.STRING,
        allowNull: false
    },
    perfil_de_uf: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Dados_dialise;