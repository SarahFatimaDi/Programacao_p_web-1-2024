/*Aqui será o resultado do exame de sangue obrigatório que o paciente terá que fazer toda segunda semana
Será uma tabela que estará em constante atualização. Se fosse um caso real, teria que fazer algo como salvar essas informações*/
const Sequelize = require('sequelize');
const database = require('../db');

const Exame_sema_sang = database.define('exame_sang_semanal', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_resultado: {//resultado do exame de sangue
        type: Sequelize.STRING,
        allowNull: false,
    },
    ktv: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    std_ktv: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ureia_pre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ureia: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hb: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ht: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ferretina: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sat_tranf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    calcio: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fosforo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pth: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tgp: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    k: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    glicose: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    glic_jy: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Exame_sema_sang;