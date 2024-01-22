// Retornar o mínimo, máximo, comprimento e média de uma matriz

function analisarArray(arr) {
    if (arr.length === 0) {
        return null; 
    }

    var menor = arr[0];
    var maior = arr[0];
    var soma = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        }
        if (arr[i] > maior) {
            maior = arr[i];
        }
        soma += arr[i];
    }

    var media = soma / arr.length;

    var resultados = [menor, maior, arr.length, media];

    return resultados;
}

var minhaMatriz = [3, 7, 1, 10, 5];
var resultadosArray = analisarArray(minhaMatriz);
console.log(resultadosArray);