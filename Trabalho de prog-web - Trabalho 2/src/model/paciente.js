const Sequelize = require('sequelize');
const database = require('../db');

/*
    Lembrar que o médico será responsável por fazer o cadastro do paciente.
    Será feito a "ligação" dessa table provavelmente na Controller.
    Essa table terá ligação com a table Dados_paciente (será a table em que a equipe de enfermagem fará as inserções dos dados),
    essa tabela será para as prescrições da diálise do paciente.
*/

const Paciente = database.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_paciente: {
        type: Sequelize.STRING,
        allowNull: false,       
    },
    cns: {//campo que vai informar o número do cartão do SUS (Cartão Nacional de Saúde)
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    convenio: {//campo que vai informar se é convênio ou não
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_nascimento_paciente: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    altura_paciente: {
        type: Sequelize.STRING, //ver certinho para passar para float
        allowNull: false,  
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo_sang: {//tipo sanguineo do paciente
        type: Sequelize.STRING,
        allowNull: false,
    },
    diabetes: {//campo que vai informar se o paciente é diabético ou não
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo_tratamento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cid: {//campo que vai informar qual a classificação da doença
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_inicio_trat: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_primeira_dialise_vida: {//campo que vai informar quando foi a primeiro hemodiálise feita pelo paciente
        type: Sequelize.STRING,
        allowNull: false,
    },
    escala: {//CAMPO ONDE VAI FALAR QUAIS OS DIAS QUE O PACIENTE IRÁ FAZER HEMODIÁLISE. SERÁ HABILIDATO A POSSIBILIDADE DE DEIXAR NULO, POIS PODERÁ HAVER MUDANÇAS DE DIAS.
        type: Sequelize.STRING,
        allowNull: true
    },
    turno_local: {//CAMPO QUE MOSTRA O LOCAL E O TURNO EM QUE O PACIENTE FARÁ A HEMODIÁLISE. TAMBÉM SERÁ A HABILITADA A POSSIBILIDADE DE DEIXAR O CAMPO NULO, POIS TAMBÉM PODERÁ MUDANÇAS.
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Paciente;