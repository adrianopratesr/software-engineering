import { students } from "./mock.js";
import { isMonthTheSame } from "./utils.date.js";



const filterStudentsBornByMonth = (students, monthName) => {
  const numberOfTheMonth = getMonthNumber(monthName);
  const studentsBornedInSpecificMonth = students.filter((student) => 
    isMonthTheSame(student.dateOfBirth, numberOfTheMonth))
  const sumAges = studentsBornedInSpecificMonth.reduce((acumulador, student) => acumulador +
  student.age, 0)
  return Math.floor(sumAges / studentsBornedInSpecificMonth.length);
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
