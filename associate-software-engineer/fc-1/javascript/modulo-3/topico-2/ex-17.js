import { students } from "./mock.js";

const findStudentsByName = (name) => {
  return students.filter((student) => name == student.name);
};

console.log(findStudentsByName("Ana Clara"));
