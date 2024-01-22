//Some os números - Retorna a soma de um número voltando à sua raiz.

function add(num) {
    if (num <= 1) {
      return num;
    } else {
      return num + add(num - 1);
    }
  }

  var resulado = add(5);
  console.log(resultado);