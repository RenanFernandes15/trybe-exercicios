// exercicio-1 5 funções que realizao operações aritméticas básicas.

function soma(a, b) {
  return a + b;
};

function subtracao(a, b) {
  return a - b;
};

function multiplicacao(a, b) {
  return a * b;
;}

function divisao(a, b) {
  return a / b;
};

function modulo(a, b) {
  return a % b;
};

// Exercicio-2 o progama retorna o maior de 2 numbers.

function maiordedois(a, b) {
  if (a > b) {
    return 'maior valor é: ' + a;
  }
  else {
    return 'maior valor é: ' + b;
  };
};
console.log(maiordedois(22, 13));

// Exercicio-3 o algoritimo retorna o maior de 3 numeros.

function higherNumber(a, b, c) {
  if (a > b && a > c) {
    return 'maior valor é: ' + a;
  }
  else if (b > a && b > c) {
    return 'maior valor é: ' + b;
  }
  else {
    return 'maior valor é: ' + c;
  };
};
console.log(higherNumber(22, 32, 15));

// Exercicio-4 o algoritimo retorna true se o numero é positivo(maior que 0), caso contrario ele retornara false, retorna 'Zero' se o numero for igual a zero.

function positiveOrNegative(a) {
  if (a === 0) {
    return 'Zero';
  }
  else if (a > 0) {
    return true;
  }
  else {
    return false;
  };
};
console.log(positiveOrNegative(6));

// Exercicio-5 o algoritimo retorna true se os valores representarem angulos de um triangulo, caso não represente retorna false, se o valor for menor que zero sera considerado invalido e retornara uma mensagem de erro.

function itIsTriangle(a, b, c) {
  let soma = a + b + c;
  if (a < 0 || b < 0 || c < 0) {
    return 'Erro: Valor ivalido! O valor deve ser maior que zero';
  }
  else if (soma === 180) {
    return true;
  }
  else {
    return false;
  };
};
console.log(itIsTriangle(50, 50, 80));