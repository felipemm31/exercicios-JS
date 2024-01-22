// Retorne apenas números

function filtrarNaoString(array) {
    var novoArray = array.filter(function (elemento) {
        return typeof elemento !== 'string';
    });

    return novoArray;
}

var meuArray = [1, 'dois', 3, 'quatro', 'cinco', 6];
var novoArrayFiltrado = filtrarNaoString(meuArray);
console.log(novoArrayFiltrado);