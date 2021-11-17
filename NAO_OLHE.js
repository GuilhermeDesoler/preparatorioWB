console.log("O Arquivo Funcionou");

// Exemplos

const numeros = [1, 2, 5, 12, 23];

const frase = "O Carlos trollou e agora terei que pintar o cabelo";

// Teste 1

function soma(array) {
  let resultado = 0;
  for (let index = 0; index < array.length; index++) {
    resultado += array[index];
  }
  return resultado;
}
console.log("Retorno função soma:", soma(numeros));

// Teste 2

function diff(array) {
  let par = 0;
  let impar = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      par += array[index] * 2;
    } else {
      impar += array[index] * 3;
    }
  }
  return impar + par;
}
console.log("Retorno função diff:", diff(numeros));

// Teste 3

function stringImpar(string) {
  let stringEmArray = string.split(" ");
  let resultado = [];
  for (let index = 0; index < stringEmArray.length; index++) {
    if (stringEmArray[index].length % 2 !== 0) {
      resultado.push(stringEmArray[index]);
    }
  }
  return resultado;
}
console.log("Retorno função stringImpar:", stringImpar(frase));

// Teste 4

function stringComp(string) {
  let stringEmArray = string.split(" ");
  let resultado = [];
  for (let index = 0; index < stringEmArray.length; index++) {
    resultado.push(stringEmArray[index].length);
  }
  return resultado;
}
console.log("Retorno função stringComp:", stringComp(frase));

// Teste 5

function gnirts(string) {
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    newString += string[string.length - 1 - index];
  }
  return newString;
}

console.log("Retorno função gnirts:", gnirts(frase));
