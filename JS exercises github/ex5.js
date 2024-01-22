//Elimine todos os números ímpares de uma matriz.

function removerImpares(matriz) {
    var matrizPares = matriz.filter(function (numero) {
        return numero % 2 === 0;
    });

    return matrizPares;
}

var minhaMatriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var novaMatriz = removerImpares(minhaMatriz);
console.log(novaMatriz);