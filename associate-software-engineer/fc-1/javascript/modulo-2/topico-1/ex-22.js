import { students } from "./mock.js";

const verify_age = students.every((ages) => {
  return ages.age > 19;
});

console.log(verify_age);
