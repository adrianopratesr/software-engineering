import { students } from "./mock.js";

const listNamesOfAges = students.map((student) => {
  return `${student.name} - ${student.age}`;
});

console.log(listNamesOfAges);
