// Classifique os números em ordem crescente

var numeros = [10, 5, 8, 2, 1];

numeros.sort(function(a, b) {
    return a - b;
});

console.log(numeros);