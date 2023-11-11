import { students } from "./mock.js";

const averageAges = students.reduce((ages, position) => {
  return ages + position.age;
}, 0);

console.log(averageAges);
