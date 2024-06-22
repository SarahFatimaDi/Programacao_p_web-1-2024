const Sequelize = require('sequelize');
const database = require('../db');

// Login dos médicos
const User_medico = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    crm: { //aqui o meio de login será por meio do crm do médico. Funcionará como se fosse o email
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
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

module.exports = User_medico;