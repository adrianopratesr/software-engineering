const values = [1, 2, 3, 4, 5];

const sumValues = values.reduce((value, position) => {
  return value + position;
});

console.log(sumValues);
