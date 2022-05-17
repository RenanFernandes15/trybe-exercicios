// exercicio-1 cria o objeto player contendo as variáveis abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

// Exetcicio-2 acessa as chaves name, lastname, age e concatena as suas informações imprimindo no console.log() uma mensagem.

console.log("A jogadora " + player.name, player.lastName + " tem " + player.age + " anos de iadade");

// exercicio-3 adiciona oa objeto  a chave bestInTheWorld e atrybui o array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Exercicio-4 faz um console.log() com uma fraze e acessa a chave bestInTheWorld.

console.log('A jogadora ' + player.name + player.lastName + ' foi eleita a melhor do mundo por 6 vezes. ' + player.bestInTheWorld);

// Exercicio-5 faz um console.log com uma fraze e acessa a chave medals.

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + 'medalhas de prata.');

