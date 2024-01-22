//função que irá verificar se str1 termina com os caracteres de str2

function checkStr(str1, str2) {
    return str1.endsWith(str2);
  };

  var resultado = checkStr("Ola mundo!", "mundo!");
  console.log(resultado); //true
  
  var resultado1 = checkStr("Olá a todos!", "Mundo!");
  console.log(resultado1); //false