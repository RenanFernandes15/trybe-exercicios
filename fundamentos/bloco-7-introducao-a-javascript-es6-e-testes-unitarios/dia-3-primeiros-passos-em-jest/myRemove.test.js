// const { describe } = require('yargs');
const myRemove = require('./myRemove.js');

describe('Recebe um array e um item, retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expect.arrayContaining([1, 2, 4]));
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expect.not.arrayContaining([1, 2, 3, 4]));
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(expect.arrayContaining([1, 2, 3, 4]));
  });
})