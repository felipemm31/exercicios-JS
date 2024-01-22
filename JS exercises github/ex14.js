//Multiplique todos os elementos de um array pelo seu comprimento

function multiplicarPorComprimento(elemento, indice, array) {
    return elemento * array.length;
  }
  
  let meuArray = [1, 2, 3, 4, 5];
  
  let novoArray = meuArray.map(multiplicarPorComprimento);
  
  console.log(novoArray);