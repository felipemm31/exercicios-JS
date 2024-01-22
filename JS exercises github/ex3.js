//fatorar um número

function calcularFatorial(numero){
   
    if (numero < 0) { 
        return "O fatorial não é definido p/ números negativos"
    }

    if (numero === 0){ 
        return 1;
    }

    let resultado = 1; 

    for (let i=1; i<= numero; i++) { 
        resultado *= i;
    }
    
    return resultado;

}

const numeroUsuario = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
const resultadoFatorial = calcularFatorial(numeroUsuario);

document.write('O fatorial de '+numeroUsuario+' é: '+resultadoFatorial+'.');