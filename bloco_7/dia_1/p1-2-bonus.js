/*
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => {
  return a - b;
});
// source = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

console.log(
  `Os números ${oddsAndEvens[0]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[3]},${oddsAndEvens[4]},${oddsAndEvens[5]} se encontram ordenados de forma crescente!`
);
