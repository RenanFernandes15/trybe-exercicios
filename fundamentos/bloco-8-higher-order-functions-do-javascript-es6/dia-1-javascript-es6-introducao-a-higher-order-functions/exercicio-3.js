const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const CheckResult = (template, answers) => {
  let correct = 0;
  let incorrect = 0;
  template.forEach((value, index) => {
      if (answers[index] === 'N.A') {
      }
      else if (answers[index] === value) {
        correct += 1;
      }
      else {
        incorrect -= 0.5;
      }
  });
  console.log(correct);
  console.log(incorrect);
  return [correct, incorrect];
};

const gradeChecker = (template, answers, callback) => {
  const checked = callback(template, answers);
  return checked[0] + checked[1];
};

console.log(gradeChecker(RIGHT_ANSWERS, STUDENT_ANSWERS, CheckResult)
);