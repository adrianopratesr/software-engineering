import { students } from "./mock.js";

const filteringStudentAges = (students, age1, age2) => {
  const ages = students.filter((student) => {
    if (student.age >= age1 && student.age <= age2) {
      return `Os estudentes que tem idade entre ${age1} e ${age2} são ${student.name}`;
    }
  });

  if (ages.length === 0) {
    return `Não existem estudantes entre as idades ${age1} e ${age2}`;
  }

  return ages;
};

console.log(filteringStudentAges(students, 30, 65));
