import { students } from "./mock.js";
import { convertingMilliSecondInDays } from "./utils.date.js";

const differencesBetweenAges = (student1, student2) => {
  const dateOfBirthStudent1 = new Date(student1.dateOfBirth);
  const dateOfBirthStudent2 = new Date(student2.dateOfBirth);
  const diference = Math.abs(dateOfBirthStudent1 - dateOfBirthStudent2);
  return  printMessage(student1, student2, diference)
};

const printMessage = (student1, student2, diference) => {
  return `A diferença de dias entre o(a) estudente ${
    student1.name
  } e o(a) estudente ${student2.name} é igual a ${convertingMilliSecondInDays(
    diference
  )} dias`;
};


console.log(differencesBetweenAges(students[0], students[1]));
