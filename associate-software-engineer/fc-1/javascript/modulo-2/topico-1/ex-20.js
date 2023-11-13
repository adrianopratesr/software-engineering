import { students } from "./mock.js";

const studentsInMinorAge = students.filter((ages) => {
  return ages.age < 21;
});

console.log(studentsInMinorAge);
