const removeVowels = (word) => {
  const characters = word.split('');
  let results = ''; // mudando para string vazia
  let number = 1; // criando variavel number

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results += number; // alterando para adicionar um numero no lugar de uma vogal
      number += 1; // adicionando uma unidade a variavel
    } else {
      results += characters[i]; // alterando para adicionar a consoante
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');
assert.deepStrictEqual(typeof removeVowels, 'function');
assert.deepStrictEqual(removeVowels(parameter), result);
