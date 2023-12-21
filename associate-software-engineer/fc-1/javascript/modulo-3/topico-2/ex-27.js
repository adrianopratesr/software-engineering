import { students } from "./mock.js";

const isMonthTheSame = (date, monthNumber) => {

  return new Date(date).getMonth() === monthNumber;
  };


const filterStudentsBornByMonth = (students, monthName) => {
  const numberOfTheMonth = getMonthNumber(monthName);
  return students.filter((student) => 
    isMonthTheSame(student.dateOfBirth, numberOfTheMonth)
  );

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
