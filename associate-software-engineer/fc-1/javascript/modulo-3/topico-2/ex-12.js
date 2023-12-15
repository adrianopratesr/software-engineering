import { students } from "./mock.js";

function averageAge(students) {
  const sumAges = students.reduce((total, student) => total + student.age, 0);
  const averageAge = sumAges / students.length;
  return averageAge;
}

console.log(averageAge(students));
