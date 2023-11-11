import { students } from "./mock.js";

const verifyAgesEqual = students.some((student, index, array) => {
  const filterAges = array.filter((studentb) => {
    return studentb.age === student.age;
  });
  return filterAges.length > 1;
});

console.log(verifyAgesEqual);
