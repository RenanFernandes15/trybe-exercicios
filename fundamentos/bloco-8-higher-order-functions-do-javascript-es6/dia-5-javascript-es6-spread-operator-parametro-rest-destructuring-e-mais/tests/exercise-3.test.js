const { personLikes, gunnar, alex } = require("../exercise-3");

describe('personLikes', () => {
  it('Verifica se personLikes é uma função', () => {
    expect(typeof personLikes).toBe('function');
  });
  it('personLikes recebe o objeto alex, deve retorna um string com o seguinte formato "Alex is 26 years old and likes fly fishing."', () => {
    expect(personLikes(alex)).toBe('Alex is 26 years old and likes fly fishing.');
  });
  it('personLikes recebe o objeto gunnar, deve retorna um string com o seguinte formato "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures."', () => {
    expect(personLikes(gunnar)).toBe('Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
  });
});