let word = 'tryber';
let wordInverted = "";

for (let index = 1; index <= word.length; index += 1) {
  wordInverted += word[word.length - index];
};
console.log(wordInverted);