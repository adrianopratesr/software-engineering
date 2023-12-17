import { students } from "./mock.js";

const convert = (students) => {
  const ages = students.map((student) => {
    return differenceDate(student);
  });
  return ages;
};

const differenceDate = (student) => {
  const currentDate = new Date();
  const millisecondsDifference = currentDate - Date.parse(student.dateOfBirth);
  const ageInYears = Math.floor(
    millisecondsDifference / 1000 / 60 / 60 / 24 / 365
  );
  return ageInYears;
};

console.log(convert(students));
