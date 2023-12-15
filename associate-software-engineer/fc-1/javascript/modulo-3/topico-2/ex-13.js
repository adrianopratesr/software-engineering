import { students } from "./mock.js";

function youngestStudent(students) {
  return students.reduce(
    (youngest, student) => (youngest.age < student.age ? youngest : student),
    {}
  );
}

console.log(youngestStudent(students));
