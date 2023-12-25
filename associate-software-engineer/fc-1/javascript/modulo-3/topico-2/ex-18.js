import { students } from "./mock.js";
import { getMonthNumber } from "./utils.date.js";

const birthdaysOfTheMonth = (students, bithdayMonth) => {
  const numberOfTheMonth = getMonthNumber(bithdayMonth);
  return students.filter((student) =>
    checkMonthOfBirthday(student.dateOfBirth, numberOfTheMonth)
  );
};

const checkMonthOfBirthday = (date, bithdayMonth) => {
  const dateOfBirth = new Date(date);
  const month = dateOfBirth.getMonth();
  return month === bithdayMonth;
};


console.log(birthdaysOfTheMonth(students, "Julho"));
