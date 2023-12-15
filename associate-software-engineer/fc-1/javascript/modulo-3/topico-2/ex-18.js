import { students } from "./mock.js";

const aniversariantedomes = (students, mesdoaniversario) =>
  students.filter((student) => {
    const dateOfBirth = new Date(student.dateOfBirth);
    const getmes = dateOfBirth.getMonth() + 1;
    return getmes === mesdoaniversario;
  });

console.log(aniversariantedomes(students, 5));
