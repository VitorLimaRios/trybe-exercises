const { describe, it, expect } = require('@jest/globals');
const {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
  getAnimalByAge,
} = require('./exercises');

describe('Exercise 1', () => {
  it('Escreva um teste que verifique a chamada do callback de uma função uppercase.', (done) => {
    const callback = (word) => {
      expect(word).toBe('WORD');
      done();
    };
    uppercase('word', callback);
  });
});

describe('Exercise 2', () => {
  it('Faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado.', () => {
    return getUserName(4).then(name => {
      expect(name).toBe('Mark');
    });
  });
  it('E também um teste para o caso em que o usuário não é encontrado.', () => {
    return getUserName(7).catch(error => {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    });
  });
});

describe('Exercise 3', () => {
  it('Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await. Usuário encontrado.', async () => {
    const data = await getUserName(4);
    expect(data).toBe('Mark');
  });
  it('Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await. Usuário não encontrado.', async () => {
    try {
      await getUserName(7);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  });
});

describe('Exercise 4', () => {
  it('Faça um teste que verifique que os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram nessa lista.', async () => {
    const data = await getRepos('https://api.github.com/users/tryber/repos');
    expect(data).toContain('challenge-bug-hunting-youtrybe-squad-5');
    expect(data).toContain('exercise-pokedex-state');
  });
});

// Exercise 5
/*
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
*/
// 1 - beforeEach 1 - test 1 - afterEach 1 - beforeEach 2 - beforeEach 2 - test 2 - afterEach 1 - afterEach

// Exercise 6.1
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });
  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// Exercise 6.2
describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o array com o objeto do animal', () => {
      return getAnimalByAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });
  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      return getAnimalByAge(8000).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});
