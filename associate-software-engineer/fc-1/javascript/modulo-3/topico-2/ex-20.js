import { students } from "./mock.js";

const removerestudante = (name) => {
  const positionStudent = students.findIndex(
    (student) => student.name === name
  );
  return students.splice(positionStudent, 1);
};

console.log(removerestudante(students, "Adriano"));
