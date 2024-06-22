//Terá informações importantes sobre a sessão de hemodiálise do paciente
const Sequelize = require('sequelize');
const database = require('../db');

const Sessao_hemo = database.define('sessao_hemodialise', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_dia: {
      type: Sequelize.STRING,
      allowNull: false  
    },
    inicio_hemo: {//HORA DE INICIO DA HEMODIÁLISE
      type: Sequelize.STRING,
      allowNull: false  
    },
    pa_pre_hd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fim_hemo: {//HORA QUE ACABOU A HEMODIÁLISE
        type: Sequelize.STRING,
        allowNull: false
    },
    peso_pre_hd: {
      type: Sequelize.STRING,
      allowNull: false  
    },
    uf_programada: {
      type: Sequelize.STRING,
      allowNull: false  
    },
    exesso_kg: {
      type: Sequelize.STRING,
      allowNull: false  
    },
    temperatura_paciente: {
      type: Sequelize.STRING,
      allowNull: false  
    },
    primeira_hora: {//primeira hora de hemo do paciente
      type: Sequelize.STRING,
      allowNull: true 
    },
    segunda_hora: {
        type: Sequelize.STRING,
        allowNull:true
    },
    terceira_hora: {
        type: Sequelize.STRING,
        allowNull:true
    },
    quarta_hora: {
        type: Sequelize.STRING,
        allowNull:true
    },
    //PARTE SUPERIOR QUE ESTAVA NO PAPEL. VER O QUE FAZER NA PARTE DE HTML. **VER COMO FAZER LAYOUTS E VER O HTML E CSS NO FIGMA**
    pa: {//não sei o que é, ver depois
        type: Sequelize.STRING,
        allowNull: true  
    },
    fc: {
        type: Sequelize.STRING,
        allowNull: true  
    },
    fluxo_sang: {
        type: Sequelize.STRING,
        allowNull: true  
    },
    pressao_art_acesso: {//tipo de acesso, arterial, e pressão do paciente(acho q é isso)
        type: Sequelize.STRING,
        allowNull: true  
    },
    pressao_ven_acesso: {//tripo de acesso, venosa, e pressão do paciente(talvez seja isso)
        type: Sequelize.STRING,
        allowNull: true  
    },
    ptm: {
        type: Sequelize.STRING,
        allowNull: true  
    },
    fluxo_dialisato: {
        type: Sequelize.STRING,
        allowNull: true  
    },
    teste_reuso: {
        type: Sequelize.STRING,
        allowNull: true  
    },
    pa_pos_hd: {
        type: Sequelize.STRING,
        allowNull: true  
    },
    peso_pos_h: {//acredito que seja peso pós hora
        type: Sequelize.STRING,
        allowNull: true  
    },
    kt_v_online: {//Kt/V online
        type: Sequelize.STRING,
        allowNull: true  
    },
    vol_subst: {//volume substituido/subtituto
        type: Sequelize.STRING,
        allowNull: true  
    },
    cod_tec_enf: {//código do técnico de enfermagem. Nesse caso teriamos que colocar o id ou fazer algum tipo de código para cada técnico
        type: Sequelize.STRING,
        allowNull: false  
    },
    intercorrencia: {//Caso tenha acontecido algo inesperado ou algo do tipo. Anotações também.
        type: Sequelize.STRING,
        allowNull: true  
    },
});

module.exports = Sessao_hemo;