import { students } from "./mock.js";

const minor_age = students.filter((ages) => {
  return ages.age < 21;
});

console.log(minor_age);
