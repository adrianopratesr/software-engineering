const grade1 = 10;
const grade2 = 10;
const grade3 = 10;
const burden1 = 1;
const burden2 = 1;
const burden3 = 1;

const calculateWeightedAverage = (
  grade1,
  grade2,
  grade3,
  burden1,
  burden2,
  burden3
) => {
  const calculate =
    (grade1 * burden1 + grade2 * burden2 + grade3 * burden3) /
    (burden1 + burden2 + burden3);
  return calculate;
};

console.log(
  calculateWeightedAverage(grade1, grade2, grade3, burden1, burden2, burden3)
);
