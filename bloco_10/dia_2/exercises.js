// exercise 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// exercise 2 and 3
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }
      return reject({ error: 'User with ' + id + ' not found.' });
  });
};
  
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// Exercise 4
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
};

// Exercise 6.1
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.name === name);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals[0]);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  });
};

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(list => list);
};
// ---------------------
// Exercise 6.2
const findAnimalByAge = (age) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }
      return reject('Nenhum animal com essa idade!');
    }, 100);
  });
};

const getAnimalByAge = (age) => {
  // Adicione o código aqui.
  return findAnimalByAge(age).then(list => list);
};

module.exports = {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
  getAnimalByAge
};
