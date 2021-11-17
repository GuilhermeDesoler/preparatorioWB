console.log("O Arquivo Funcionou");

///////////////////////////////////////////////////////////
// Exemplos /
/////////////

const numeros = [1, 2, 5, 12, 23];

const frase = "O Carlos trollou e agora terei que pintar o cabelo";

///////////////////////////////////////////////////////////
// Teste 1 /
////////////

function soma(array) {
  let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
  return result;
}
//Retire comentário do código a seguir para testar
// console.log('Retorno função soma:', soma(numeros));

///////////////////////////////////////////////////////////
// Teste 2 /
////////////

function diff(array) {
  let result = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        result += array[i] * 2;
      }
      else {
        result += array[i] * 3;
      }
    }
  return result;
}
// Retire comentário do código a seguir para testar
// console.log('Retorno função diff:', diff(numeros));

///////////////////////////////////////////////////////////
// Teste 3 /
////////////

function stringImpar(string) {
  let result = [];
  let stringSeparada = string.split(" ");
    for (let i = 0; i < stringSeparada.length; i++) {
      if (stringSeparada[i].length % 2 !== 0) {
        result.push(stringSeparada[i]);
      }
    }
  return result;
}
//Retire comentário do código a seguir para testar
// console.log('Retorno função stringImpar:',stringImpar(frase));

///////////////////////////////////////////////////////////
// Teste 4 /
////////////

function stringComp(string) {
  let result = [];
  let stringSeparada = string.split(" ");
    for (let i = 0; i < stringSeparada.length; i++) {
      result.push(stringSeparada[i].length);
    }
  return result;
}
//Retire comentário do código a seguir para testar
// console.log('Retorno função stringComp:', stringComp(frase));

///////////////////////////////////////////////////////////
// Teste 5 /
////////////

function gnirts(string) {
  let result = " ";
    for (let i = string.length; i >= 0; i--) {
      result += string[i - 1];
    }
  return result;
}
//Retire comentário do código a seguir para testar
// console.log('Retorno função gnirts:', gnirts(frase));
