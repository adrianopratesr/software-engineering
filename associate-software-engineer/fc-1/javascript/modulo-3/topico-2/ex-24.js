import { students } from "./mock.js";

const convertDate = (student) => {
  return student.map((date) => new Date(date.dateOfBirth));
};

const formatDate = (student) => {
  const convert = convertDate(student);
  const formatted = convert.map((date) => {
    const day = date.getDate() + 1;
    const month = new Intl.DateTimeFormat("pt-br", { month: "long" }).format(
      date
    );
    const year = date.getFullYear();
    return `${day} de ${month} de ${year}`;
  });
  return formatted;
};

console.log(formatDate(students));
