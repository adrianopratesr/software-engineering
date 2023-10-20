const values = [1, 2, 3, 4, 5];

const sum_values = values.reduce((value, position) => {
  return value + position;
});

console.log(sum_values);
