// soma dos angulos internos: a + b + c = 180 para cer um triangulo
//

const a = 50;
const b = 51;
const c = 80;

if (a + b + c === 180) {
  console.log(true)
}
else if (a % 2 !== 0) {
  console.log("Erro: angulo 'a' invalido. O valor de ser positivo");
  console.log("Exemplo: 2, 4, 6, 12, 20...");
}
else if (b % 2 !== 0) {
  console.log("Erro: angulo 'b' invalido. O valor de ser positivo");
  console.log("Exemplo: 2, 4, 6, 12, 20...");
}
else if (c % 2 !== 0) {
  console.log("Erro: angulo 'c' invalido. O valor de ser positivo");
  console.log("Exemplo: 2, 4, 6, 12, 20...");
}
else if (a, b, c !== typeof(0)) {
  console.log("Erro: Valor invalido! O valor deve ser somente numerico.");
  console.log("Exemplo: 1, 2, 10, 20...")
}
else if (a + b + c !== 180) {
  console.log(false);
}
