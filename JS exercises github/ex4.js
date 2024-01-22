//Uma função que permite saber se um número é par ou ímpar

function imparOuPar(numero) {

    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }

  var resultado = imparOuPar(5);
  console.log(resultado); 