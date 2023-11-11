import { students } from "./mock.js";

const filterNameA = students.filter((student) => {
  return student.name[0] === "A";
});

console.log(filterNameA);
