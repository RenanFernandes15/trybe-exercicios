const { getPlanet } = require("../exercise-3");

const expected = {
  name: "Mars",
  distanceFromSun: { value: 227900000, measurementUnit: "kilometers" },
};

describe("getPlanet", () => {
  it("Verifica se imprime Marte", (done) => {
    getPlanet((mars) => {
      try {
        expect(mars).toEqual(expected);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
