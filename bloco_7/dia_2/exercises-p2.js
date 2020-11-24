const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addProperty = (obj, key, value) => {
  obj[key] = value;
};
addProperty(lesson2, 'turno', 'manhã');

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const objKey = (obj) => Object.keys(obj);

//Crie uma função para mostrar o tamanho de um objeto.
const objSize = (obj) => Object.entries(obj).length;

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = (obj) => Object.values(obj);

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const objGroup = () => {
  let allLessons = new Object();
  allLessons.lesson1 = Object.assign({}, lesson1);
  allLessons.lesson2 = Object.assign({}, lesson2);
  allLessons.lesson3 = Object.assign({}, lesson3);
  return allLessons;
};
const allLessons = objGroup();

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const studentsNumber = () => {
  let students = 0;
  students += allLessons.lesson1.numeroEstudantes;
  students += allLessons.lesson2.numeroEstudantes;
  students += allLessons.lesson3.numeroEstudantes;
  return students;
};

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const keyValue = (obj, position) => Object.values(obj)[position];

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const objContain = (obj, key, value) => {
  const object = Object.entries(obj);
  for (i in object) {
    if (object[i][0] === key && object[i][1] === value) {
      return true;
    }
  }
  return false;
};

//Bônus:
//Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const lessonWatched = (subject) => {
  let students = 0;
  for (i in allLessons) {
    if (allLessons[i]['materia'] === subject) {
      students += allLessons[i]['numeroEstudantes'];
    }
  }
  return students;
};

//Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5.
const teacherObj = (teacher) => {
  for (i in allLessons) {
    if (allLessons[i]['professor'] === teacher) {
      return allLessons[i];
    }
  }
  return 'teacher not found';
};
console.log(teacherObj('Carlos'));
