const backgroundColor = document.querySelector('#backgroundColor');
const color = document.querySelector('#color');
const fontSize = document.querySelector('#fontSize');
const lineHeight = document.querySelector('#lineHeight');
const fontFamily = document.querySelector('#fontFamily');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
  const paragraph = document.querySelectorAll('.paragraph');
  const values = [
    backgroundColor.value,
    color.value,
    fontSize.value,
    lineHeight.value,
    fontFamily.value,
  ];
  document.getElementsByTagName('body')[0].style.backgroundColor = values[0];
  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.color = values[1];
    paragraph[index].style.fontSize = values[2];
    paragraph[index].style.lineHeight = values[3];
    paragraph[index].style.fontFamily = values[4];
  }
  localStorage.setItem('user_preferences', JSON.stringify(values));
});

window.onload = () => {
  if (localStorage.length !== 0) {
    const values = JSON.parse(localStorage.getItem('user_preferences'));
    const paragraph = document.querySelectorAll('.paragraph');
    document.getElementsByTagName('body')[0].style.backgroundColor = values[0];
    for (let index = 0; index < paragraph.length; index += 1) {
      paragraph[index].style.color = values[1];
      paragraph[index].style.fontSize = values[2];
      paragraph[index].style.lineHeight = values[3];
      paragraph[index].style.fontFamily = values[4];
    }
  }
};
