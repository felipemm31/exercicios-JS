//Converter números em algarismos romanos
function intParaRomano(numero){
    let valores = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let numRomano = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    let romano="";
    for (i=0;i<valores.length;i++){
        while (valores[i] <= numero){
            romano += numRomano[i];
            numero -= valores[i];
        }
    }
    return romano;

    }

    console.log(intParaRomano(1230));
