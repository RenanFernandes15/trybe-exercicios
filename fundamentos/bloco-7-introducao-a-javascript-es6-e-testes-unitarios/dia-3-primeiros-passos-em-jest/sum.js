const sum = (a, b) => {
  try {
    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
    return a + b;
  } catch(error) {
    return error.message;
  }
}
module.exports = sum;
console.log(sum(4, '5'));