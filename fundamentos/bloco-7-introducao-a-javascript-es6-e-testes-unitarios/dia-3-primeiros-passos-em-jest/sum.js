// const checkIsNumber = (a, b) => {
//   if(typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }
// }

// const sum = (a, b) => {
//   try {
//     checkIsNumber(a, b);
//     return a + b;
//   } catch(error) {
//     return error.message;
//   }
// }

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;
// console.log(sum(4, '5'));