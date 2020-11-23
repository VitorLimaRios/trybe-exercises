//Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (num) => {
  let number = num;
  for (let i = 1; i < num; i += 1) {
    number *= num - i;
  }
  return number;
};

console.log(fatorial(4));
