import { students } from "./mock.js";

const sumAges = students.reduce((ages, position) => {
  return ages + position.age;
}, 0);

const averageAges = sumAges / students.length;
console.log(averageAges);
