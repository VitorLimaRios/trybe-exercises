const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, 'Esperado retorno 9');
// Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, 'Esperado retorno 0');
// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
//sum(4, '5');
//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.strictEqual(
  sum(4, '5'),
  'parameters must be numbers',
  'Não foi dado erro quando uma string é usada como parâmetro'
);
