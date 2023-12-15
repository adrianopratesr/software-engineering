import { students } from "./mock.js";

const convertData = () => {
  const currentDate = new Date();
  const ages = students.map((student) => {
    const millisecondsDifference =
      currentDate - Date.parse(student.dateOfBirth);
    const ageInYears = Math.floor(
      millisecondsDifference / 1000 / 60 / 60 / 24 / 365
    );
    return ageInYears;
  });
  return ages;
};

console.log(convertData());
