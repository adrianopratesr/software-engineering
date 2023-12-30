import { students } from "./mock.js";
import {  getMonthNumber, isMonthTheSame } from "./utils.date.js";

const birthdaysOfTheMonth = (students, bithdayMonth) => {
  const numberOfTheMonth = getMonthNumber(bithdayMonth);
  return students.filter((student) =>
    isMonthTheSame(student.dateOfBirth, numberOfTheMonth)
  );
};



console.log(birthdaysOfTheMonth(students, "Julho"));
