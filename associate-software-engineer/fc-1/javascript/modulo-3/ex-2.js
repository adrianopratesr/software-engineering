const grade1 = 10;
const grade2 = 10;
const grade3 = 10;
const grade4 = 10;

const calculateAvgGrades = (grade1, grade2, grade3, grade4) => {
  const avg = (grade1 + grade2 + grade3 + grade4) / 4;
  return avg;
};

console.log(calculateAvgGrades(grade1, grade2, grade3, grade4));
