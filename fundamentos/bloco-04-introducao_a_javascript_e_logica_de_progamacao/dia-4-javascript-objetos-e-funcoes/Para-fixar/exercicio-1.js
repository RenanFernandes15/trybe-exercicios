let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

// Exercicio-2 imprime uma mensagem de 'olá' para cada pessoa contida no objeto names.

for (let key in names) {
  console.log('Olá ' + names[key]);
};
