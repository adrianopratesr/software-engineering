import { students } from "./mock.js";

const filteringStudentAges = (students, initialAge, endAge) => {
  return students.filter((student) => {
    return student.age >= initialAge && student.age <= endAge
  });
};

console.log(filteringStudentAges(students, 30, 65));
