import { students } from "./mock.js";

const alphabeticalOrder = students.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
console.log(alphabeticalOrder);
