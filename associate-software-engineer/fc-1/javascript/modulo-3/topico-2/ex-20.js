import { students } from "./mock.js";

const removeStudentByName = (students, name) => {
  const positionStudent = students.findIndex(
    (student) => student.name === name
  );
  return students.splice(positionStudent, 1);
};

console.log(removeStudentByName(students, "Adriano"));
