console.log("O Arquivo Funcionou");

///////////////////////////////////////////////////////////
// Exemplos /
/////////////

const numeros = [1, 2, 5, 12, 23];

const frase = "O Carlos trollou e agora terei que pintar o cabelo";

///////////////////////////////////////////////////////////
// Teste 1 /
////////////

function soma(array){
  let resultado = 0;
  for(let i = 0; i < array.lenght; i++){
    resultado = resultado + array[i];
  }
  return resultado;
}
//Retire comentário do código a seguir para testar
console.log('Retorno função soma:', soma(numeros));

///////////////////////////////////////////////////////////
// Teste 2 /
////////////

function diff(array) {
  let impares = 0;
  let pares = 0;
  let soma = 0;
  for(let i = 0; i < array.lenght; i++){
    if(array[i] % 2 === 0){
      pares = pares + (array[i] * 2); 
    }
    else{
      impares = impares + (array[i] * 3);
    }
  }
  soma = pares + impares
  return soma
}
// Retire comentário do código a seguir para testar
console.log('Retorno função diff:', diff(numeros));

///////////////////////////////////////////////////////////
// Teste 3 /
////////////

function stringImpar(string) {
  let impares = [];
  for(let i = 0; i < string.lenght; i++){
    if (string.lenght[i] % 2 !== 0){
      impares.push(string[i])
    }
  }
  return impares
}
//Retire comentário do código a seguir para testar
console.log('Retorno função stringImpar:',stringImpar(frase));

///////////////////////////////////////////////////////////
// Teste 4 /
////////////

function stringComp(string) {
  let comprimento = [];
  for(let i = 0; i < string.lenght; i++){
    comprimento.push(string.lenght[i])
    }
    return comprimento
  }
//Retire comentário do código a seguir para testar
//console.log('Retorno função stringComp:', stringComp(frase));
const frase = "O Carlos trollou e agora terei que pintar o cabelo";

///////////////////////////////////////////////////////////
// Teste 5 /
////////////

function gnirts(string) {
  // Adicione seu código
  string.split('').reverse().join('')
}
//Retire comentário do código a seguir para testar
//console.log('Retorno função gnirts:', gnirts(frase));
