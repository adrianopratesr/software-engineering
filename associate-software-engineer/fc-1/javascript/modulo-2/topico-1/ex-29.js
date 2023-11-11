import { students } from "./mock.js";

const studentOld = students.reduce((a, b) => {
  return Math.max(a, b.age);
}, -Infinity);

console.log(studentOld);
