const { sum } = require("../exercise-2");

describe('sum', () => {
  it('Espera que sum seja um função', () => {
    expect(typeof sum).toBe('function');
  });
  it('Espera que a soma de 1, 2, 3, seja igual a 4', () => {
    expect(sum(1, 2, 3,)).toBe(6);
  });
  it('Espera que a soma de 6, 6, 12, 8 seja igual a 36', () => {
    expect(sum(6, 6, 12, 8)).toBe(32);
  });
  it('Espera que a soma de 0 e 0 seja igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});