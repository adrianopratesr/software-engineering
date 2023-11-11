import { students } from "./mock.js";

const orderAges = students.sort((a, b) => {
  return b.age - a.age;
});

console.log(orderAges);
