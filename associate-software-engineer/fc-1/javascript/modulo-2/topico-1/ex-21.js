import { students } from "./mock.js";

const age_equal = students.find((equal) => {
  return equal.age === 20;
});

console.log(age_equal);
