const numbers = [1, 5, 3, 7];

const verifyNumberNegative = numbers.every((number) => {
  return number >= 0;
});

console.log(verifyNumberNegative);
