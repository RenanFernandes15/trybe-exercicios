const sum = require('./sum.js');
// const { describe } = require('yargs');

// test('soma dois valores', () => {
//   expect(sum(4, 5)).toBe(9);
// });

describe('soma dois valores', () => {
  it('verifica se a soma de 4 e 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('verifica se a soma de 0 e 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('verifica se a função sum lança um erro qunado os parâmetros não são numeros', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });

  it('verifica se a mensagem de erro é "parameters must be numbers" quando os parametros não são numeros', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});