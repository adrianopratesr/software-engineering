import { students } from "./mock.js";

const differencesBetweenAges = (student1, student2) => {
  const dateOfBirthStudent1 = new Date(student1.dateOfBirth);
  const dateOfBirthStudent2 = new Date(student2.dateOfBirth);
  if (student1.age > student2.age) {
    const diference = dateOfBirthStudent2 - dateOfBirthStudent1;
    return `A diferença de dias entre o(a) estudente ${
      student1.name
    } e o(a) estudente ${student2.name} é igual a ${convertingMillisecondInDays(
      diference
    )} dias`;
  }
  const diference2 = dateOfBirthStudent1 - dateOfBirthStudent2;
  return `A diferença de dias entre o(a) estudente ${
    student1.name
  } e o(a) estudente ${student2.name} é igual a ${convertingMillisecondInDays(
    diference2
  )} dias`;
};

const convertingMillisecondInDays = (milliseconds) => {
  return Math.floor(milliseconds / 1000 / 60 / 60 / 24);
};
console.log(differencesBetweenAges(students[0], students[1]));
