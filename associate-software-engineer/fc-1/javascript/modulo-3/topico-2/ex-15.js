import { students } from "./mock.js";
import { differenceDate } from "./utils.date.js";

students.forEach((student) => {
  student.age = differenceDate(student.dateOfBirth);
});

console.log(students);
