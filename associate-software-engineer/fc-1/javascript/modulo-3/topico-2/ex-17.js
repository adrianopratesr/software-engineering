import { students } from "./mock.js";

const findStudentsByName = (string) => {
  return students.filter((student) => string == student.name);
};

console.log(findStudentsByName("Ana"));
