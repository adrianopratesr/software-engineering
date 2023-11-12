import { students } from "./mock.js";

const studentsSortedByDescendingAge = students.sort((a, b) => {
  return b.age - a.age;
});

console.log(studentsSortedByDescendingAge);
