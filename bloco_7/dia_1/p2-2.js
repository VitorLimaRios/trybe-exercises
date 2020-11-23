//Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggerWord = (sentence) => {
  const arr = sentence.split(' ');
  let bigWord = 0;
  let position = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let word = arr[i].length;
    for (let j = 0; j < arr.length; j += 1) {
      if (word < arr[j].length) {
        bigWord = word;
        position = j;
      }
    }
  }
  return arr[position];
};

console.log(biggerWord('vamos nessa pessoal tamo livre agora'));
