//Será o local onde a equipe de enfermagem vai preencher quais medicações foram feitas no paciente
/*As medicações terão opção de não serem preenchidas, pois pode ser que o paciente não precise de usar nenhuma delas ou apenas 1 delas.*/
const Sequelize = require('sequelize');
const database = require('../db');

const Medicacoes_dialise = database.define('medicacoes_dialise', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: Sequelize.STRING,
        allowNull: false
    },
    paricalcitol: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ferro: {
        type: Sequelize.STRING,
        allowNull: true
    },
    eritopoetina: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = Medicacoes_dialise;