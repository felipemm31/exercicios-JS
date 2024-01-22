//Crie uma função que repetirá cada caractere da string duas vezes

function repetirCaracteres(str) {
    return str.split('').map(caracter => caracter + caracter).join('');
  }

  let resultado = repetirCaracteres("abc");
  console.log(resultado); 