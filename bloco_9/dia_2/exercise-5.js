// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

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
    return division;
  })
  .then((num) => console.log(num.reduce((acc, num) => acc + num)))
  .catch((err) => console.log(err));
