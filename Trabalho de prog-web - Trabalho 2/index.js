const express = require('express');
const mustacheExpress = require('mustache-express');
//const session = require('express-session');
const db = require('./src/db');

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public')); //serve arquivos estaticos

//session
// Configuração da sessão
/*app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}))*/

//Define as rotas de aplicação declaradas na pasta routes
app.use('/', require('./src/routes/med_enfRouter'));
app.use('/', require('./src/routes/pacienteRouter'));
app.use('/', require('./src/routes/autenticarRouter'));
app.use('/', require('./src/routes/examesRouter'));

db.sync(() => console.log(`Banco de dados conectado`));

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta '+ PORT);
});