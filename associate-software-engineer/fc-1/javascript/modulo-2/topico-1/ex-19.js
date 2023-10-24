import { students } from "./mock.js";

const list_names = students.map((student) => {
  return student.name;
});

console.log(list_names);
