// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, element) => (acc += element.toLowerCase().split('a').length - 1), 0);
}
// source https://stackoverflow.com/questions/45603369/check-how-many-times-a-char-appears-in-a-string/45603521
assert.deepStrictEqual(containsA(), 20);
