// soma dos angulos internos: a + b + c = 180 para cer um triangulo
//

const a = 50;
const b = - 50;
const c = 80;

if (a > 0 && b > 0 && c >0) {
  if (a + b + c === 180) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
else {
  console.log("Erro: angulo invalido. O valor de ser positivo");
};