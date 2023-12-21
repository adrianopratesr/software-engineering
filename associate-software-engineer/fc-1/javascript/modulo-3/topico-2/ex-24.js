import { students } from "./mock.js";

const formatDate = (date) => {
  const dateOfBirth = new Date(date)
  const day = dateOfBirth.getDate() + 1;
  const month = new Intl.DateTimeFormat("pt-br", { month: "long" }).format(
    dateOfBirth);
    const year = dateOfBirth.getFullYear();
    return `${day} de ${month} de ${year}`;
  
};

students.forEach((student) => {
  student.dateOfBirth = formatDate(student.dateOfBirth)
});

console.log(students);
