import { students } from "./mock.js";

const convertDate = (students) => {
  return new Date(students.dateOfBirth);
};

const datesOfBirth = students.map((date) => {
  return convertDate(date);
});

console.log(datesOfBirth);
