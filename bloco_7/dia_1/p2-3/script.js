const button = document.getElementsByTagName('button')[0];
const span = document.getElementsByTagName('span')[0];
let countador = 0;

button.addEventListener('click', () => {
  countador += 1;
  span.innerText = countador;
});
