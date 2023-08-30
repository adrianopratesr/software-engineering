const points = 0;
const bonus = 10;

const totalGamePoints = (points, bonus) => {
  points += bonus;
  return (points -= 5);
};

console.log(totalGamePoints(points, bonus));
