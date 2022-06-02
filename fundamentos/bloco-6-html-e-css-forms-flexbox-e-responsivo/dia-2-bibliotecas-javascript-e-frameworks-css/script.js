const fullName = document.getElementById('fullname');
const email = document.getElementById('e-mail');
const place = document.getElementById('place');
const textArea = document.getElementById('because-you');
const date = document.getElementById('date');
const requirement = document.getElementById('requirement');
const buttons = document.getElementById('buttons');
const buttonSubmit = document.getElementById('button-submit');

function createButtons(local, tag, type, clas, id) {
  const element = document.createElement(tag);
  element.type = type;
  element.className = clas;
  element.id = id;
  local.appendChild(element);
}

function textLength(local, min, max) {
  local.maxLength = max;
  local.minLength = min;
}

function fullNameConfig() {
  textLength(fullName, 10, 40);
  fullName.required = true;
}

function emailConfig() {
  textLength(email, 10, 50);
  email.required = true;
  email.type = 'email';
}

function placeConfig() {
  const labels = place.querySelectorAll('#place input[name="local"]');
  for (let index of labels) {
    index.required = true;
  }
}

function textAreaConfig() {
  textLength(textArea, false, 500);
  textArea.required = true;
}

function dateConfig() {
  date.required = true;
}

function requirementConfig() {
  requirement.required = true;
}

function addButtons() {
  createButtons(buttons, 'input', 'submit', '', 'button-submit');
  createButtons(buttons, 'input', 'reset', '', 'button-reset');
}
// buttonSubmit.addEventListener('click', () => {
//   event.preventDefault();
//   console.log(buttonSubmit.value);
// })

// chama functions
fullNameConfig();
emailConfig();
placeConfig();
textAreaConfig();
dateConfig();
requirementConfig();
addButtons();
