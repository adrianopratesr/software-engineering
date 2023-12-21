import { students } from "./mock.js";

const isMonthTheSame = (date, monthNumber) => {

  return new Date(date).getMonth() === monthNumber;
  };


const filterStudentsBornByMonth = (students, monthName) => {
  const numberOfTheMonth = getMonthNumber(monthName);
  const filterStudentsMettingMonthBirth = students.filter((student) => 
    isMonthTheSame(student.dateOfBirth, numberOfTheMonth))
  const sumAges = filterStudentsMettingMonthBirth.reduce((acumulador, student) => acumulador +
  student.age, 0)
  return Math.floor(sumAges / filterStudentsMettingMonthBirth.length);
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
  return monthNames.indexOf(monthName) ;
}

console.log(filterStudentsBornByMonth(students, "Maio"));
