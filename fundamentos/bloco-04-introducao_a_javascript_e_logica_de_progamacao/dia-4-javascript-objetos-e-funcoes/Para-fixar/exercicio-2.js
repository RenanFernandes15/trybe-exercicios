let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

// Para-fixar-2 exercicio-2 imprime as chaves e valores do objeto car.

for (let key in car) {
  console.log(key + ':', car[key]);
}