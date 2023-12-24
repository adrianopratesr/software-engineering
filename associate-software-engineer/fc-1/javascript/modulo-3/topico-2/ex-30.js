import { students } from "./mock.js";

const filteringStudentAges = (students, initialAge, endAge) => {
  const ages = students.filter((student) => {
    if (student.age >= initialAge && student.age <= endAge) {
      return student;
    }
  });

  return ages;
};

console.log(filteringStudentAges(students, 30, 65));
