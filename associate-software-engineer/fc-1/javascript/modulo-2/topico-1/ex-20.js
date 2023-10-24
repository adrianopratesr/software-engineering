import { students } from "./mock.js";

const minorAge = students.filter((ages) => {
  return ages.age < 21;
});

console.log(minorAge);
