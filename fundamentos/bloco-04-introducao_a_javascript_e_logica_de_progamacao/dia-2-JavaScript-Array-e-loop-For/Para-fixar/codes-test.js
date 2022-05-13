let tasksList = ["Tomar café", "reunião", "Brincar com o cachorro"];

console.log(tasksList.length);
console.log(tasksList[0]);
console.log(tasksList[tasksList.length - 1]);

tasksList.push('Fazer exercícios da Trybe');
tasksList.unshift("Escovar os dentes");
console.log(tasksList);

tasksList.pop();
tasksList.shift();

console.log(tasksList);

console.log(tasksList.indexOf("Reunião"));

