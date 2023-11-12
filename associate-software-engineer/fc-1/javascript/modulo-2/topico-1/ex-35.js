import { students } from "./mock.js";

const alphabeticalOrder = students
  .sort((a, b) => {
    if (a.name === b.name) {
      return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
  })
  .map((student) => `nome: ${student.name}, idade: ${student.age}`);

console.log(alphabeticalOrder);
