const sum = (...numbers) =>
  numbers.reduce((numberA, numberB) => numberA + numberB, 0);

console.log(sum(2, 3));
