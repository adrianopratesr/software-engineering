import { students } from "./mock.js";

const verifyAge = students.every((ages) => {
  return ages.age > 19;
});

console.log(verifyAge);
