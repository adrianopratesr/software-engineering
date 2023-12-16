import { students } from "./mock.js";

const oldestStudent = (students) =>
  students.reduce(
    (oldest, student) => (oldest.age > student.age ? oldest : student),
    {}
  );

console.log(oldestStudent(students));
