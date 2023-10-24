import { students } from "./mock.js";

const listNames = students.map((student) => {
  return student.name;
});

console.log(listNames);
