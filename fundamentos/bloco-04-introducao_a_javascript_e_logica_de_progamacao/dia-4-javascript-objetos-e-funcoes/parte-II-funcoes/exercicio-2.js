function indiceMaiorValor(array) {
  let maior = array[0];
  let result;
  for (let index in array) {
    if (array[index] > maior) {
      maior = array[index];
      result = index;
    }
  }
  return result;
}
let array = [2, 3, 6, 7, 10, 1];
console.log(indiceMaiorValor(array));