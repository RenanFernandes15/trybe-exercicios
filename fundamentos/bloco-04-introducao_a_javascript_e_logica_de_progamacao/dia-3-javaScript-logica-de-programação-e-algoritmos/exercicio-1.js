let number = 10
let valores;
let fatorial = 1;

for (let index = 0; index < 10; index += 1) {
  fatorial *= number - index;
}
console.log(fatorial);
