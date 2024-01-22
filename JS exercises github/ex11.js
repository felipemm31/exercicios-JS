//Retorne a soma absoluta de todos os elementos do array

function somaAbsoluta(array) {
      return array.reduce((sum,num) => sum + Math.abs(num),0)
    };
  
  const arrayEx=[-1,-6,-9,-5,0];
  const resultado=somaAbsoluta(arrayEx);
  console.log(resultado);