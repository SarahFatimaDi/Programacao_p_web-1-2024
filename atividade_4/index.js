const express = require('express');
const calculo = require('./util/calculadora');
const app = express();

const PORT = 8080;

/*app.get('/', function(req, res){
    res.send('Página inicial.');
});
*/
app.get('/somar/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calculo.somar(x, y);
    res.send(`${x} + ${y} = ${c}`);
});

app.get('/subtrair/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calculo.subtrair(x, y);
    res.send(`${x} - ${y} = ${c}`);
});

app.get('/multiplicar/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calculo.multp(x, y);
    res.send(`${x} * ${y} = ${c}`);
});

app.get('/dividir/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calculo.dividir(x, y);
    res.send(`${x} / ${y} = ${c}`);
});

app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT);
});