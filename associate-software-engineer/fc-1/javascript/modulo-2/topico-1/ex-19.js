import { students } from "./mock.js";

const studentsNames = students.map((student) => {
  return student.name;
});

console.log(studentsNames);
