const values = [1, 2, 3, 4, 5];

const sumValues = values.reduce((value, item) => {
  return value + item;
}, 0);

console.log(sumValues);
