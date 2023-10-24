const numbers = [34, 7, 23, 32, 5, 62];

const order_numbers = numbers.sort((a, b) => {
  return a - b;
});

console.log(order_numbers);
