import { students } from "./mock.js";

const ageEqual = students.find((equal) => {
  return equal.age === 20;
});

console.log(ageEqual);
