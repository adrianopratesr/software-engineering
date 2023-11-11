import { students } from "./mock.js";

const studentsMoreTwentyYears = students.filter((student) => {
  return student.age > 20;
}).length;

console.log(studentsMoreTwentyYears);
