import { students } from "./mock.js";

const namesMoreThreeCharactersAndTwentyYears = students
  .filter((a) => a.age > 20)
  .filter((a) => a.name.length > 3)
  .map((student) => `Nome: ${student.name}, Idade: ${student.age}`);

console.log(namesMoreThreeCharactersAndTwentyYears);
