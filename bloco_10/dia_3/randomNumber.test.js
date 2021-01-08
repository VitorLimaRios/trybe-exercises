let randomNumber = require('./randomNumber');
jest.mock("./randomNumber");

describe('Exercise 1: defina o retorno padrão como 10.', () => {
  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('Exercise 2: crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
  it('Faça os testes necessários.', () => {
    randomNumber.mockReset();
    randomNumber.mockImplementation((a,b) => a / b);

    randomNumber(4,2)
    expect(randomNumber).toHaveLastReturnedWith(2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4, 2);

    randomNumber.mockReset();
    randomNumber(4,2)
    expect(randomNumber).toHaveLastReturnedWith(undefined);
    expect(randomNumber).toHaveBeenCalledWith(4, 2);
  });
});
