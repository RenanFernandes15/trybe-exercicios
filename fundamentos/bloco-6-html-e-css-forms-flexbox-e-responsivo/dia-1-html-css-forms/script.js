const fullName = document.getElementById('fullname');
const email = document.getElementById('e-mail');
const place = document.getElementById('place');
const textArea = document.getElementById('because-you');
const date = document.getElementById('date');
const requirement = document.getElementById('requirement');
const form = document.getElementById('form');

function createElements(local, tag, type) {
  const element = document.createElement(tag);
  element.type = type;
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
  const labels = place.querySelectorAll('label input');
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

function button() {
  createElements(form, 'input', 'submit');
  createElements(form, 'input', 'reset');
}


// chama functions
fullNameConfig();
emailConfig();
placeConfig();
textAreaConfig();
dateConfig();
requirementConfig();
button();

const buttonSubmit = document.querySelector('form input[type="submit"]');
buttonSubmit.addEventListener('click', () => {
  event.preventDefault();
  console.log(buttonSubmit.value);
})
