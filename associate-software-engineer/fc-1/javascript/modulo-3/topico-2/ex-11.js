import { students } from "./mock.js";

function filterByAge(age) {
  return students.filter((student) => student.age > age);
}

console.log(filterByAge(18));
