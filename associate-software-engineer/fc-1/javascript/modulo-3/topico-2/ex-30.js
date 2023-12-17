import { students } from "./mock.js";

const filteringStudentAges = (students, initialAge, endAge) => {
  const ages = students.filter((student) => {
    if (student.age >= initialAge && student.age <= endAge) {
      return `Os estudentes que tem idade entre ${initialAge} e ${endAge} são ${student.name}`;
    }
  });

  if (ages.length === 0) {
    return `Não existem estudantes entre as idades ${initialAge} e ${endAge}`;
  }

  return ages;
};

console.log(filteringStudentAges(students, 30, 65));
