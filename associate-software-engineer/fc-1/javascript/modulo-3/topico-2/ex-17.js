import { students } from "./mock.js";

const findStudentsByName = (students, name) => {
  return students.filter((student) => name == student.name);
};

console.log(findStudentsByName(students, "Ana Clara"));
