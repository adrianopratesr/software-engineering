const points = 0;
const bonus = 10;

const calculateGamePoints = (points, bonus) => {
  points += bonus;
  points -= 5;
  return points;
};

console.log(calculateGamePoints(points, bonus));
