// // exercicio-1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// // exercicio-2

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// // exercicio-3

menu.push('Contato');

console.log(menu);

// Para-fixar-2
// exercicio-1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
};

// Para-fixar-3
// exercicios-1

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  for(let letter of name) {
    console.log(letter);
  }
}