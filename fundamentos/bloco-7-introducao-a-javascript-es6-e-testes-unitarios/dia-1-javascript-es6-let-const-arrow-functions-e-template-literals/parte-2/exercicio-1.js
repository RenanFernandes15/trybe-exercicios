// const fatorial = n => {
//   if (n > 1) {
//     return n * fatorial(n - 1);
//   }
//   return n;
// };

const fatorial = n => (n > 1)? n * fatorial(n - 1) : n;

console.log(fatorial(5));