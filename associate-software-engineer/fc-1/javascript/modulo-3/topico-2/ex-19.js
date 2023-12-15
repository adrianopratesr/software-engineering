import { students } from "./mock.js";

const adicionandoestudante = (students, novoestudante) =>
  students.push(novoestudante);

adicionandoestudante(students, {
  name: "Antonio",
  age: 31,
  dateOfBirth: "1992-05-18",
});
console.log(students);
