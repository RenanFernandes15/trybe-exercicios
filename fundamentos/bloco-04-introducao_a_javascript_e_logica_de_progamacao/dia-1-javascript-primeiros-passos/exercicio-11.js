const salarioBruto = 6000.00;

let salarioLiquido;
let salarioBase;
let impostoInss;
let impostoIr;

if (salarioBruto <= 1556.94) {
  impostoInss = salarioBruto * 0.08;
  salarioLiquido = salarioBruto - impostoInss;
  console.log("Salario líquido: R$", salarioLiquido);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  impostoInss = salarioBruto * 0.09;
  salarioBase = salarioBruto - impostoInss;

  if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoIr = salarioBase * 0.075 - 142.80;
    salarioLiquido = salarioBase - impostoIr;
    console.log("Salario líquido: R$", salarioLiquido);
  }
  else {
    console.log("Salario líquido: R$", salarioBase);
  };
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  impostoInss = salarioBruto * 0.11;
  salarioBase = salarioBruto - impostoInss;

  if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoIr = salarioBase * 0.075 - 142.80;
    salarioLiquido = salarioBase - impostoIr;
    console.log("Salario líquido: R$", salarioLiquido);
  }
  else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoIr = salarioBase * 0.15 - 354.80;
    salarioLiquido = salarioBase - impostoIr;
    console.log("Salario líquido: R$", salarioLiquido);
  }
  else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoIr = salarioBase * 0.225 - 636.13;
    salarioLiquido = salarioBase - impostoIr;
    console.log("Salario líquido: R$", salarioLiquido);
  }
  else {
    impostoIr = salarioBase * 0.275 - 869.36;
    salarioLiquido = salarioBase - impostoIr;
    console.log("Salario líquido: R$", salarioLiquido);
  };
}
else {
  impostoInss = 570.88;
  salarioBase = salarioBruto - impostoInss;
  impostoIr = salarioBase * 0.275 - 869.36;
  salarioLiquido = salarioBase - impostoIr;
  console.log("Salario líquido: R$", salarioLiquido);
};