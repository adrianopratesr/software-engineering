import { students } from "./mock.js";
import { getMonthNumber, isMonthTheSame } from "./utils.date.js";



const filterStudentsBornByMonth = (students, monthName) => {
  const numberOfTheMonth = getMonthNumber(monthName);
  const studentsBornedInSpecificMonth = students.filter((student) => 
    isMonthTheSame(student.dateOfBirth, numberOfTheMonth))
  const sumAges = studentsBornedInSpecificMonth.reduce((acumulador, student) => acumulador +
  student.age, 0)
  return Math.floor(sumAges / studentsBornedInSpecificMonth.length);
};


console.log(filterStudentsBornByMonth(students, "Maio"));
