const numbers = [1, 5, -3, 7];

const hasNegativeNumber = numbers.some((number) => {
  return number < 0;
});

console.log(hasNegativeNumber);
