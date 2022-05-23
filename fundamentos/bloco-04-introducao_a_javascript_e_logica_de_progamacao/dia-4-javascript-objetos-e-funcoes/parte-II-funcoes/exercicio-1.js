function verificarPalindrome(string) {
  let compare = '';
  for (let index = 1; index <= string.length; index += 1) {
    compare += string[string.length - index];
  }
  console.log(compare);
  if (string === compare) {
    return true;
  }
  return false;
}
console.log(verificarPalindrome('desenvolvimento'));
