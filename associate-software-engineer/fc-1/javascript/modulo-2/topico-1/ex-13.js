const numbers = [1, 5, 8, 12, 16, 3];

const numberLowerThan10 = numbers.find((number) => {
  return number > 10;
});

console.log(numberLowerThan10);
