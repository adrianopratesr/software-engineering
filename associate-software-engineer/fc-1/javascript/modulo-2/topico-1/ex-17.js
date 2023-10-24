const numbers = [34, 7, 23, 32, 5, 62];

const orderNumbers = numbers.sort((a, b) => {
  return a - b;
});

console.log(orderNumbers);
