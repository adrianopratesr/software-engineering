import { students } from "./mock.js";

const studentsOrderedByName = students.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
console.log(studentsOrderedByName);
