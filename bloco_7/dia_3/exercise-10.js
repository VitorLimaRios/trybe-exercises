const greetPeople = (people) => {
  let greeting = []; // mudando para ser um array

  for (const person in people) {
    greeting.push('Hello ' + people[person]); // mudando para adicionar valores ao array
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');
assert.deepStrictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);
