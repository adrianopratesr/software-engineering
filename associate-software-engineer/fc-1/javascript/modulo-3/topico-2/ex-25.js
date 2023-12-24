import { students } from "./mock.js";
import { convertingMilliSecondInDays } from "./utils.date.js";


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
  student.dateOfBirth = nextBirth(student.dateOfBirth);
});

console.log(students);
