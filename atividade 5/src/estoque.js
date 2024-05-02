let produtos = []; //um array vazio para a entrada dos produtos.

function criarProduto (id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p; //função para a criação de produtos.
}

function adicionarProduto(p){
    produtos.push(p); //comando para armazenar os produtos na variável da linha 1
}

function listarProdutos(){
    return produtos; // função para listar os produtos.
}

function removerProduto(id){
    produtos = produtos.filter((p) => {
        return p.id != id;
    }); //função para remover o produto da lista. Funciona da seguinte fomra: faz um filtro que vai passar por toda a lista pegando como referência o id. Se o id que "estou olhando" for diferente do id que eu quero retirar, então ele "passa na peneira" e segue a vida, se for igual, então faço a remoção.
}

function atualizarProduto(id, novoNome, novaQtd){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id == id){
            produtos[i].qtd = novaQtd;
            console.log('Produto atualizado com sucesso: ' + produtos[i]);
            return;
        }
    }
    console.log('Produto de ID: '+ id + ' não encontrado.');
}

module.exports = {
    criarProduto,
    adicionarProduto,
    removerProduto,
    listarProdutos,
    atualizarProduto
};