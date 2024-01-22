//Crie uma função que exibirá o menor valor do array.

function encontrarMenorValor(array) {
  
    if (array.length === 0) {
      return console.log("O array está vazio.");
    }
  
    const menorValor = Math.min(...array);
    console.log("O menor valor no array é: "+menorValor);
  }
  
  const meuArray = [10,9,21,12,46,5666666];
  encontrarMenorValor(meuArray);