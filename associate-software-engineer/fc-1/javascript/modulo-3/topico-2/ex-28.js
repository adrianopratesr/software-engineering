import { students } from "./mock.js";

const convertDate = (student) => {
  return student.map((date) => {
    const data = new Date(date.dateOfBirth);
    const month = data.getMonth() + 1;
    return month;
  });
};

const meetingBirthdays = (month, birthMonth) => {
  const filtrando = month.filter((_, index) => {
    return month[index] === birthMonth;
  });
  return filtrando;
};

const sumAges = (...ages) => {
  return ages.reduce((age1, age2) => {
    return age1 + age2;
  }, 0);
};

const calculatingAverage = (students, birthMonth) => {
  const convert = convertDate(students);
  const monthOfBirthday = meetingBirthdays(convert, birthMonth);
  const ages = students
    .filter((_, index) => convert[index] === birthMonth)
    .map((student) => student.age);

  const sum = sumAges(...ages);
  const average = sum / monthOfBirthday.length;

  if (ages.length === 0) {
    return `Nenhum estudante nasceu neste mês!`;
  }
  return average;
};

console.log(calculatingAverage(students, 5));
