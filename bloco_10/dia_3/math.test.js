const math = require('./math');
jest.mock("./math");

describe('Exercise 1: mock da funcão subtrair', () => {
  it('Teste sua chamada', () => {
    math.subtrair.mockImplementation((a, b) => a - b);

    expect(math.subtrair(10, 5)).toBe(5);
    expect(math.subtrair).toHaveBeenCalled();
  });
});

describe('Exercise 2: mock da função multiplicar', () => {
  describe('Implemente como retorno padrão o valor 10', () => {
    it('Teste a chamada e o retorno', () => {
      math.multiplicar = jest.fn().mockReturnValue(10);

      expect(math.multiplicar(10, 5)).toBe(10);
      expect(math.multiplicar).toHaveBeenCalled();
    });
  });
});

describe('Exercise 3: mock da função somar', () => {
  describe('Implemente uma função que recebe dois valores e retorna sua soma', () => {
    it('Teste a chamada, o retorno e os parâmetros passados', () => {
      math.somar.mockImplementation((a, b) => a + b);

      expect(math.somar(10, 5)).toBe(15);
      expect(math.somar).toHaveBeenCalled();
      expect(math.somar).toHaveBeenCalledWith(10, 5);
    });
  });
});

describe('Exercise 4: mock da função dividir', () => {
  describe('implemente um retorno padrão com o valor 15 e os seguintes valores para a primeira e segunda chamadas: 2 e 5.', () => {
    it('Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.'
    , () => {
      math.dividir = jest
        .fn()
        .mockReturnValue(15)
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(5);

      expect(math.dividir(10, 5)).toBe(2);
      expect(math.dividir).toHaveBeenCalledTimes(1);
      expect(math.dividir).toHaveBeenCalledWith(10, 5);

      expect(math.dividir(10, 5)).toBe(5);
      expect(math.dividir).toHaveBeenCalledTimes(2);

      expect(math.dividir(10, 5)).toBe(15);
      expect(math.dividir).toHaveBeenCalledTimes(3);
    });
  });
});

describe('Exercise 5: mock da função subtrair', () => {
  describe('implemente de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor 20.', () => {
    it('Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.'
    , () => {
      const mockSubtrair = jest
        .spyOn(math, "subtrair")
        .mockImplementation((a, b) => a - b)
        .mockReturnValue(20);
      
      math.subtrair(2,1);
      expect(mockSubtrair).toHaveBeenCalledTimes(2);
      expect(mockSubtrair(2,1)).toBe(20);
      expect(mockSubtrair).toHaveBeenCalledTimes(3);

      math.subtrair.mockRestore()     
      expect(math.subtrair(10, 5)).toBe(undefined);
    });
  });
});
