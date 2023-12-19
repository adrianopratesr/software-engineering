import { students } from "./mock.js";

const rangeAgeStudents = (age) => {
  if (age < 0) {
    return "Não aceitamos idades negativas";
  }
  if (age > 0 && age <= 18) {
    return "0-18";
  } else if (age > 18 && age <= 60) {
    return "18-60";
  } else {
    return "60+";
  }
};

const groupByStudents = (students) => {
  const peoples = students.reduce((totalStudent, student) => {
    const age = student.age;
    const range = rangeAgeStudents(age);
    if (!totalStudent[range]) {
      totalStudent[range] = [];
    }

    totalStudent[range].push(student);

    return totalStudent;
  }, {});
  return peoples;
};

console.log(groupByStudents(students));
