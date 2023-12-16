import { students } from "./mock.js";

const convertDate = (students) => {
  const maipulatingData = students.map((date) => new Date(date.dateOfBirth));
  return maipulatingData;
};

console.log(convertDate(students));
