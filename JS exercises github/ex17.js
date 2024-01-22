/* Retorna a localização do índice de um elemento de um determinado array.
O primeiro argumento é o array que você deseja pesquisar e o segundo é o elemento (string/número) a ser procurado. */

function encontrarIndice(array, elemento) {
    // verifica se o elemento está presente no array
    if (array.indexOf(elemento) !== -1) {
      // retorna o índice do elemento
      return array.indexOf(elemento);
    } else {
      // retorna -1 se o elemento não for encontrado
      return -1;
    }
  }
  
  // exemplo de uso:
  let meuArray = [1, 2, 3, 4, 5];
  let elementoProcurado = 3;
  
  let indice = encontrarIndice(meuArray, elementoProcurado);
  
  if (indice !== -1) {
    console.log(`O elemento ${elementoProcurado} está no índice ${indice}.`);
  } else {
    console.log(`O elemento ${elementoProcurado} não foi encontrado no array.`);
  }
