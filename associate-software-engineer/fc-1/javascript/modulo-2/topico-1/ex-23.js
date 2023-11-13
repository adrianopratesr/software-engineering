import { students } from "./mock.js";

const studentsWith22 = students.some((student) => {
  return student.age === 22;
});

console.log(studentsWith22);
