const getPlanet = (callBack) => {
  setTimeout(() => {const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  callBack(mars);
  }, 4000);
};

getPlanet((mars) => {
  console.log(`Returned planet: `, mars);
}); 
// imprime Marte depois de 4 segundos

module.exports = { getPlanet }