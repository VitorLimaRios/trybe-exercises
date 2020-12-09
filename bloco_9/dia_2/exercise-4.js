// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

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
  reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
  .then((sum) => {
    const arr = [2, 3, 5, 10];
    const division = arr.map(num => sum / num);
    console.log(division);
  })
  .catch((err) => console.log(err));
