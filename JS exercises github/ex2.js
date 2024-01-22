//Função que retornará sua string em ordem alfabética


function stringAlfabeto(string) {

    var caracteres = string.split('');

    var stringOrdenada = caracteres.sort('').join('');
  
    return stringOrdenada;
  }

  var minhaString = "teste";
  var stringOrdenada = stringAlfabeto(minhaString);
  console.log("String ordenada alfabeticamente: "+stringOrdenada);