import { students } from "./mock.js";

const studentsWith20 = students.find((equal) => {
  return equal.age === 20;
});

console.log(studentsWith20);
