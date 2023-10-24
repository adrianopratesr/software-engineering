import { students } from "./mock.js";

const verifyAge = students.some((ages) => {
  return ages.age > 22;
});

console.log(verifyAge);
