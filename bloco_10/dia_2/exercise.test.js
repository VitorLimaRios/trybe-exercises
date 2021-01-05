const { expect, it } = require('@jest/globals');
const {
  uppercase,
  getUserName,
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
