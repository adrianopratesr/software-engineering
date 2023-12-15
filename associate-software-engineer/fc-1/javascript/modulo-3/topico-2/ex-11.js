import { students } from "./mock.js";

function filterByAge(students, age) {
  return students.filter((student) => student.age > age);
}

console.log(filterByAge(students, 18));
