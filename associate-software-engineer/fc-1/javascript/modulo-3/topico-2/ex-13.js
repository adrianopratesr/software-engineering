import { students } from "./mock.js";

function youngestStudent() {
  return students.reduce(
    (youngest, student) => (youngest.age < student.age ? youngest : student),
    0
  );
}

console.log(youngestStudent());
