import { students } from "./mock.js";

const studentsWhoseNamesStartWiththeLetterA = students.filter(
  (student) => student.name[0] === "A"
);

const totalAge = studentsWhoseNamesStartWiththeLetterA.reduce(
  (valueAge, position) => valueAge + position.age,
  0
);

const averageAge = totalAge / studentsWhoseNamesStartWiththeLetterA.length;

console.log(averageAge);
