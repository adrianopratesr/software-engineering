const numbers = [1, 5, -3, 7];

const verify_number_negative = numbers.some((number) => {
  return number < 0;
});

console.log(verify_number_negative);
