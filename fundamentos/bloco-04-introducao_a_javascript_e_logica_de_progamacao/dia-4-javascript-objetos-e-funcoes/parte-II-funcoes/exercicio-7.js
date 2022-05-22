function returnEnd(word, end) {
  let initialValue = word.length - end.length
  let result = '';
  for (let index = initialValue; index < word.length; index += 1) {
    result += word[index];
  }
  return result;
}
function wordEnding(word, end) {
  let compere = returnEnd(word, end);
  if (compere === end){
    return true;
  }
  return false;
  }

  console.log(wordEnding('joaofernando', 'fernan'));