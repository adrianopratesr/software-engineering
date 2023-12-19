import { students } from "./mock.js";

const convertDate = (students) => {
  return new Date(students);
};

students.forEach((student) => {
  student.dateOfBirth = convertDate(student.dateOfBirth);
});

console.log(students);
