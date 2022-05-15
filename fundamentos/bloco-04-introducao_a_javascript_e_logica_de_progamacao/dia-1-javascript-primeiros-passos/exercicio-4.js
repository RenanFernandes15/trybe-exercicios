const a = 36;
let valor;

if (a % 2 !== 0) {
  valor = "negative";
}
else if (a === 0) {
  valor = "zero";
}
else {
  valor = "positive";
}
console.log(valor);