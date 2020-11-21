function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

const ulDays = document.querySelector('#days');

function addDays() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let li = document.createElement('li');
    li.classList.add('day');
    li.innerText = dezDaysList[i];

    if (
      dezDaysList[i] === 24 ||
      dezDaysList[i] === 25 ||
      dezDaysList[i] === 31
    ) {
      li.classList.add('holyday');
    }

    if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    ) {
      li.classList.add('friday');
    }

    ulDays.appendChild(li);
  }
}
addDays();

function createButtonHolyday(Feriados) {
  const button = document.createElement('button');
  button.setAttribute('id', 'btn-holiday');
  button.innerText = 'Feriados';
  document.querySelector('.buttons-container').appendChild(button);

  let buttonPressed = false;
  button.addEventListener('click', () => {
    const holydays = document.querySelectorAll('.holyday');

    if (buttonPressed === false) {
      for (let i = 0; i < holydays.length; i += 1) {
        holydays[i].style.backgroundColor = 'rgb(88, 230, 211)';
        buttonPressed = true;
      }
    } else {
      for (let i = 0; i < holydays.length; i += 1) {
        holydays[i].style.backgroundColor = 'rgb(238,238,238)';
        buttonPressed = false;
      }
    }
  });
}
createButtonHolyday();

function createButtonFriday(sextaFeira) {
  const button = document.createElement('button');
  button.setAttribute('id', 'btn-holiday');
  button.innerText = 'Sexta-feira';
  document.querySelector('.buttons-container').appendChild(button);

  let buttonPressed = false;
  button.addEventListener('click', () => {
    const friday = document.querySelectorAll('.friday');
    const fridayNumber = [4, 11, 18, 25];

    if (buttonPressed === false) {
      for (let i = 0; i < friday.length; i += 1) {
        friday[i].innerText = 'SEXTA-FEIRA';
        buttonPressed = true;
      }
    } else {
      for (let i = 0; i < friday.length; i += 1) {
        friday[i].innerText = fridayNumber[i];
        buttonPressed = false;
      }
    }
  });
}
createButtonFriday();

ulDays.addEventListener('mouseover', (event) => {
  event.target.style.fontSize = '35px';
});

ulDays.addEventListener('mouseout', (event) => {
  event.target.style.fontSize = '20px';
});

const divTask = document.querySelector('.my-tasks');

function createTask(task) {
  const span = document.createElement('span');
  span.innerText = task;
  divTask.appendChild(span);
}
createTask('Trabalhar:');

function createColor(cor) {
  const div = document.createElement('div');
  div.classList.add('task');
  div.style.backgroundColor = cor;
  divTask.appendChild(div);

  div.addEventListener('click', () => {
    if (div.classList.contains('selected')) {
      div.classList.remove('selected');
    } else {
      div.classList.add('selected');
    }
  });
}
createColor('red');

ulDays.addEventListener('click', (event) => {
  let selectedColor = window.getComputedStyle(
    document.querySelector('.selected')
  ).backgroundColor;

  if (event.target.style.color === selectedColor) {
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = selectedColor;
  }
});

const ulAppointment = document.querySelector('.task-list');
const input = document.querySelector('#task-input');
const buttonAppointment = document.querySelector('#btn-add');

function appointment() {
  if (input.value === '') {
    return alert('error');
  }

  const p = document.createElement('p');
  p.innerText = input.value;
  ulAppointment.appendChild(p);
}

buttonAppointment.addEventListener('click', appointment);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    appointment();
  }
});
/* source: https://stackoverflow.com/questions/14542062/eventlistener-enter-key */
