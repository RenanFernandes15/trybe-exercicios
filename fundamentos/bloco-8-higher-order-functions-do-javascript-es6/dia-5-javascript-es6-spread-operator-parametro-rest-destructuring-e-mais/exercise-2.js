const sum = (...numbers) => numbers.reduce((sum, number) => sum + number, 0);

module.exports = { sum };