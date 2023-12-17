import { students } from "./mock.js";

const orderingStudents = (students) => {
  return students.sort(
    (student1, student2) =>
      new Date(student2.dateOfBirth) - new Date(student1.dateOfBirth)
  );
};

console.log(orderingStudents(students));
