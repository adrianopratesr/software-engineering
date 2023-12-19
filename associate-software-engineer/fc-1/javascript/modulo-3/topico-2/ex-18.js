import { students } from "./mock.js";

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
  return monthNames.indexOf(monthName);
}

console.log(birthdaysOfTheMonth(students, "Julho"));
