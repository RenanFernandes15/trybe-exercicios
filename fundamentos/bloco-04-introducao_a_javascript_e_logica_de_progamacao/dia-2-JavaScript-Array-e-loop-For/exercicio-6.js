let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let negativos = []

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    negativos.push(numbers[index]);
  };
};
if (negativos.length > 0) {
  console.log("Quantidade ímpares:", negativos.length);
  for (let index = 0; index < negativos.length; index += 1){
    console.log("Numeros ímpares:", negativos[index]);
  };
}
else {
  console.log("nenhum valor ímpar encontrado")
};