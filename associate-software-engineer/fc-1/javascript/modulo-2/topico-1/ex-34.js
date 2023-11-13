import { students } from "./mock.js";

const studentsMoreThan20 = students.filter((student) => {
  return student.age > 20;
});

const youngestStudent = studentsMoreThan20.reduce((youngest, student) => {
  return youngest.age < student.age ? youngest : student;
});
console.log(youngestStudent);
