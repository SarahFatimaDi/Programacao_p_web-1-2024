const Sequelize = require('sequelize');
const database = require('../db');

// Será o login dos Enfermeiros e Tec. de Enfermagem
const User_enf = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_coren: {//aqui o meio de login será por meio do coren do enfermeiro. Funcionará como se fosse o email.
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User_enf;
//PENSAR NA POSSIBILIDADE DE JUNTAR O CADASTRO DA EQUIPE DE ENFERMAGEM COM O DOS MÉDICOS