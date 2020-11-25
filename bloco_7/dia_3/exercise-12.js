const greaterThanTen = (array) => {
  let results = []; // alterando para ser um array
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]); // alterando para adicionar o valor ao array results
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

const assert = require('assert');
assert.deepStrictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);
