function transporMatriz(a){
    let matriz = [];
    for(let col = 0; col < a[0].length; col++){
        let proximaLinha = [];
        for(let lin = 0; lin < a.length; lin++){
            proximaLinha.push(a[lin][col]);
        }
        matriz.push(proximaLinha);
    }
    return matriz;
}

let matrizEx = [ 
    [1, 2, 3],
    [ 4, 5, 6]
];

let matrizTransposta = transporMatriz(matrizEx);
console.log('Matriz Transposta');
console.log(matrizTransposta);
console.log('Matriz Original');
console.log(matrizEx);