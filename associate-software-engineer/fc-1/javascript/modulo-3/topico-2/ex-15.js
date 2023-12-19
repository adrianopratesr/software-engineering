import { students } from "./mock.js";

const differenceDate = (date) => {
  const currentDate = new Date();
  const millisecondsDifference = currentDate - Date.parse(date);
  const ageInYears = millisecondsDifference / 1000 / 60 / 60 / 24 / 365;
  return Math.round(ageInYears);
};

students.forEach((student) => {
  student.age = differenceDate(student.dateOfBirth);
});

console.log(students);
