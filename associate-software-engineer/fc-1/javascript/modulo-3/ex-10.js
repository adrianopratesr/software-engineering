const grade1 = 10;
const grade2 = 10;
const grade3 = 10;
const weight1 = 1;
const weight2 = 1;
const weight3 = 1;

const calculateWeightedAverage = (
  grade1,
  grade2,
  grade3,
  weight1,
  weight2,
  weight3
) => {
  const calculate =
    (grade1 * weight1 + grade2 * weight2 + grade3 * weight3) /
    (weight1 + weight2 + weight3);
  return calculate;
};

console.log(
  calculateWeightedAverage(grade1, grade2, grade3, weight1, weight2, weight3)
);
