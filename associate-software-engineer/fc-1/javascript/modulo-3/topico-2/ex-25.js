import { students } from "./mock.js";

const convertingMilliSecondInDays = (milliseconds) => {
  return Math.round(milliseconds / 1000 / 60 / 60 / 24);
};

const nextBirth = (dateOfBirth) => {
  const currentDate = new Date();
  const dateOfBirthObj = new Date(dateOfBirth);
  const nextDateBirth = new Date(
    currentDate.getFullYear(),
    dateOfBirthObj.getMonth(),
    dateOfBirthObj.getDate() + 1
  );
  if (currentDate > nextDateBirth) {
    nextDateBirth.setFullYear(currentDate.getFullYear() + 1);
  }

  return convertingMilliSecondInDays(nextDateBirth - currentDate);
};

students.forEach((student) => {
  student.daysToBirth = nextBirth(student.dateOfBirth);
});

console.log(students);
