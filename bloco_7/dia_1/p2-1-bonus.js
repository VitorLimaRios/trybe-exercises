//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.

const fatorial = (num) => {
  if (num !== 0) {
    return (num *= fatorial(num - 1));
  } else {
    return 1;
  }
};

console.log(fatorial(4));
