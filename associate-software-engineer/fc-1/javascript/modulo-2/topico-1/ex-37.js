import { students } from "./mock.js";

const sumAges = students.reduce(
  (accumulatedAge, currentAge) => accumulatedAge + currentAge.age,
  0
);

const averageAge = sumAges / students.length;

const studentsMoreAverageAges = students
  .filter((student) => student.age > averageAge)
  .map((student) => `nome: ${student.name}, idade: ${student.age}`);

console.log(studentsMoreAverageAges);
