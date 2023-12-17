import { students } from "./mock.js";

const convertDate = (student) => {
  return student.map((date) => {
    const data = new Date(date.dateOfBirth);
    const month = data.getMonth() + 1;
    return month;
  });
};

const findStudent = (student, findMonth) => {
  const convert = convertDate(student);
  const filteredStudents = student.filter((_, index) => {
    return convert[index] === findMonth;
  });
  if (filteredStudents.length === 0) {
    return `Ninguém faz aniversário no mês ${findMonth}`;
  }

  return filteredStudents;
};

console.log(findStudent(students, 3));
