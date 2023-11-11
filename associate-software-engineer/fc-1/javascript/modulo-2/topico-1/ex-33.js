import { students } from "./mock.js";

const firsCharactereA = students.filter((student) => student.name[0] === "A");

const totalAge = firsCharactereA.reduce(
  (valueAge, position) => valueAge + position.age,
  0
);

const averageAge = totalAge / firsCharactereA.length;

console.log(averageAge);
