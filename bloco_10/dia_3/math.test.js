const math = require('./math');

describe('Exercise 1', () => {
  it('mock da funcão subtrair', () => {
    const mockSubitrair = jest.spyOn(math, "subtrair");

    expect(mockSubitrair(10, 5)).toBe(5);
    expect(mockSubitrair).toHaveBeenCalled();
  });
});
