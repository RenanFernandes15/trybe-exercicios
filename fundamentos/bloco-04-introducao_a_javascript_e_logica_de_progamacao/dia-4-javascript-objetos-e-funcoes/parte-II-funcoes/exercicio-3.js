function indiceMenorValor(array) {
  let less = array[0];
  let result;
  for (let index in array) {
    if (array[index] < less) {
      less = array[index];
      result = index;
    } 
  }
  return result;
}
const array = [2, 4, 6, 7, 10, 0, -3];
console.log(indiceMenorValor(array));