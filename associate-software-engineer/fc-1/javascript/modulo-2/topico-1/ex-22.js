import { students } from "./mock.js";

const studentsWith19 = students.every((ages) => {
  return ages.age > 19;
});

console.log(studentsWith19);
