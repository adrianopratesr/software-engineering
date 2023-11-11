import { students } from "./mock.js";

const findStudentAge = students.filter((student) => {
  return student.age > 20;
});

const minorAge = findStudentAge.reduce((a, b) => {
  return Math.min(a, b.age);
}, Infinity);

console.log(minorAge);
