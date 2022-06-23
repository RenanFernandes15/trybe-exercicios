const checkResute = (number, luckyNumber) => (
  number === luckyNumber ? 'Parabéns você ganhou' : 'Tente novamente'
);

const prizeDraw = (number, callback) => {
  const luckyNumber = parseInt(Math.random() * 10, 10)
  return `
    numberBet: ${number}
    luckyNumber: ${luckyNumber}
    result: ${callback(number, luckyNumber)}`
}; 

console.log(prizeDraw(7, checkResute));