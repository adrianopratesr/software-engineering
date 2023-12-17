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
  const numberOfTheMonth = getMonthNumber(findMonth);
  const filteredStudents = student.filter((_, index) => {
    return convert[index] === numberOfTheMonth;
  });
  if (filteredStudents.length === 0) {
    return `Ninguém faz aniversário no mês ${findMonth}`;
  }

  return filteredStudents;
};

function getMonthNumber(monthName) {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return monthNames.indexOf(monthName) + 1;
}

console.log(findStudent(students, "Junho"));
