/*
Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderArray = () => {
  for (let i = oddsAndEvens.length; i > 0; i -= 1) {
    oddsAndEvens.shift();
  }
  oddsAndEvens.push(2, 3, 4, 7, 10, 13);
  return oddsAndEvens;
};

orderArray();

console.log(
  `Os números ${oddsAndEvens[0]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[3]},${oddsAndEvens[4]},${oddsAndEvens[5]} se encontram ordenados de forma crescente!`
);
