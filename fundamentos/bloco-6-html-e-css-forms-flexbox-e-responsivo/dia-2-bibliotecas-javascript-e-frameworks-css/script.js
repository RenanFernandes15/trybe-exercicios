const fullName = document.getElementById('fullname');
const email = document.getElementById('e-mail');
const place = document.getElementById('place');
const textArea = document.getElementById('textarea');
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
  const inputs = place.querySelectorAll('#place input[name="local"]');
  for (let index of inputs) {
    index.required = true;
    index.className = 'form-check-input';
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
  createButtons(buttons, 'input', 'submit', 'btn btn-primary', 'button-submit');
  createButtons(buttons, 'input', 'reset', 'btn btn-secondary', 'button-reset');
}

function placeDivAddClass() {
  const divs = place.querySelectorAll('#place div')
  for (let index of divs) {
    index.className = 'form-check';
  }
}

function placeLabelAddClass() {
  const labels = place.querySelectorAll('#place div label')
  for (let index of labels) {
    index.className = 'form-check-label';
  }
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
placeDivAddClass();

