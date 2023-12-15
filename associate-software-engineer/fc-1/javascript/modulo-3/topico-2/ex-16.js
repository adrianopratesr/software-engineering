import { students } from "./mock.js";

const groupStudentsByAge = () => {
  const grouper = students.map((student) => {
    if (student.age >= 0 && student.age <= 12) {
      return "Estudentes entre 0 e 12 anos:"[students.name];
    } else if (student.age > 12 && student.age <= 60) {
      return `Estudentes entre 13 e 60 anos: ${student.name}`;
    } else {
      return `Estudentes maiores que 60 anos: ${student.name}`;
    }
  });
  return grouper;
};

console.log(groupStudentsByAge());
