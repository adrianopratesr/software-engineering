import { students } from "./mock.js";

const addStudent = (students, newStudent) => students.push(newStudent);

addStudent(students, {
  name: "Antonio",
  age: 31,
  dateOfBirth: "1992-05-18",
});
console.log(students);
