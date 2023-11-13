import { students } from "./mock.js";

const studentsMoreThanTwentyYears = students.filter((student) => {
  return student.age > 20;
}).length;

console.log(studentsMoreThanTwentyYears);
