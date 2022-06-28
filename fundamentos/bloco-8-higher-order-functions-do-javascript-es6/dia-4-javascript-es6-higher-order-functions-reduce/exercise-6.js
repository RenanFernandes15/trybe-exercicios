const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const average = (array) => array.reduce((sum, number) => sum + number) / array.length;

const studentAverage = (students, grades) => students.map((name, index) => ({name: name, average: average(grades[index])}));

console.log(studentAverage(students, grades));
