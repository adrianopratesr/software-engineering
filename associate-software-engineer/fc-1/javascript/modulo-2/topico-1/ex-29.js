import { students } from "./mock.js";

const oldestStudent = students.reduce((oldest, student) => {
  return oldest.age > student.age ? oldest : student;
}, {});
console.log(oldestStudent);
