// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function test() {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', test);
INPUT_CHECKBOX.addEventListener('click', test);
INPUT_TEXT.addEventListener('keypress', () => {
  if(event.key !== 'a') {
    event.preventDefault();
  }
})