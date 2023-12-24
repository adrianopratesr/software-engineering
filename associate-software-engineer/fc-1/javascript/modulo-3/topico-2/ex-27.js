import { students } from "./mock.js";
import { getMonthNumber, isMonthTheSame } from "./utils.date.js";


const filterStudentsBornByMonth = (students, monthName) => {
  const numberOfTheMonth = getMonthNumber(monthName);
  return students.filter((student) => 
    isMonthTheSame(student.dateOfBirth, numberOfTheMonth)
  );

};


console.log(filterStudentsBornByMonth(students, "Maio"));
