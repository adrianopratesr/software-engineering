import { students } from "./mock.js";

const studentsWithSameAge = students.some((student, index, array) => {
  const haveStudentSomeAges = array.filter((studentb) => {
    return studentb.age === student.age;
  });
  return haveStudentSomeAges.length > 1;
});

console.log(studentsWithSameAge);
