const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz', 'Erro');
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(9), 'fizz', 'Erro');
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(10), 'buzz', 'Erro');
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(4), 4, 'Erro');
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz('word'), false, 'Erro');
