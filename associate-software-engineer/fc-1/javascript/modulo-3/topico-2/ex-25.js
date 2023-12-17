import { students } from "./mock.js";

const convertDate = (student) => {
  return student.map((date) => new Date(date.dateOfBirth));
};

const nextBirthday = (student) => {
  const convert = convertDate(student);
  const currentDate = new Date();
  const DateOfNextBirthday = convert.map((date) => {
    const year = currentDate.getFullYear() + 1;
    const day = date.getDate() + 1;
    const month = date.getMonth();
    return new Date(year, month, day);
  });
  return DateOfNextBirthday;
};

const countingDays = (student) => {
  const dateOfNextBirthday = nextBirthday(student);
  const currentDate = new Date();
  const counting = dateOfNextBirthday.map((date) => {
    const differenceInMilliseconds = date - currentDate;
    const differenceInDays = Math.floor(
      differenceInMilliseconds / 1000 / 60 / 60 / 24
    );
    return differenceInDays;
  });
  return counting;
};

console.log(countingDays(students));
