import { students } from "./mock.js";

function alphabeticalOrder(students) {
  return students.sort(students.name);
}

console.log(alphabeticalOrder(students));
