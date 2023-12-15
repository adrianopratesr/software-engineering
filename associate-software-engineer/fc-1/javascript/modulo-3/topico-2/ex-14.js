import { students } from "./mock.js";

function alphabeticalOrder() {
  return students.sort(students.name);
}

console.log(alphabeticalOrder());
