function longName(array) {
  let long = array[0].length;
  let result;
  for (let index of array) {
    if (index.length > long) {
      long = index.length;
      result = index;
    }
  }
  return result;
}
const array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(longName(array));