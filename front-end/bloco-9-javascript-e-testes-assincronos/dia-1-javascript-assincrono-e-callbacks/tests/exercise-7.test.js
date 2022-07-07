const { uppercase } = require("../exercise-7");

describe('uppercase', () => {
  it('Verifica sé uppercase, transforma as letras de uma palavra em letras maiúsculas', (done) => {
    uppercase('repolho', (string) => {
      try {
        expect(string).toEqual('REPOLHO');
        expect(string).not.toEqual('repolho');
        done();
      } catch (error) {
        done(error);
      }
    });
  })
});