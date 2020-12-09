// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

new Promise((resolve, reject) => {
  const randomNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    const num = Math.round((Math.random() * 50) ** 2);
    randomNumbers.push(num);
  }
  const sum = randomNumbers.reduce((acc, num) => acc + num);
  if (sum < 8000) {
    resolve(sum);
  }
  reject('error');
})
  .then((sum) => {
    const arr = [2, 3, 5, 10];
    const division = arr.map(num => sum / num);
    console.log(division);
  })
  .catch((err) => console.log(err));