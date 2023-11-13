import { students } from "./mock.js";

const namesMoreThreeCharactersAndTwentyYears = students
  .filter((student) => student.age > 20)
  .filter((student) => student.name.length > 3)
  .map((student) => `Nome: ${student.name}, Idade: ${student.age}`);

console.log(namesMoreThreeCharactersAndTwentyYears);
