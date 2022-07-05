const { filterPeople, peoples } = require('../exercise-4');

describe('filterPeople', () => {
  it(`Verifica se filterPeople é um função`, () => {
    expect(typeof filterPeople).toBe('function');
  });
  it(`Verifica se filterPeople tem o retorno esperado`, () => {
    expect(filterPeople(peoples)).toEqual(['Nicole', 'Toby'])
  });
});