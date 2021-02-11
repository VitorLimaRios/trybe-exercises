// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

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
  .then((sum) => console.log(sum))
  .catch((err) => console.log(err));
