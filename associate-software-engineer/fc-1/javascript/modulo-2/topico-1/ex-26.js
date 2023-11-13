import { students } from "./mock.js";

const studentsWithFirstCharA = students.filter((student) => {
  return student.name[0] === "A";
});

console.log(studentsWithFirstCharA);
