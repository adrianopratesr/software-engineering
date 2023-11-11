import { students } from "./mock.js";

const namesMoreThreeCharacters = students.filter(
  (student) => student.name.length > 3
);

const newArrNames = namesMoreThreeCharacters.map((student) => student.name);

console.log(newArrNames);
