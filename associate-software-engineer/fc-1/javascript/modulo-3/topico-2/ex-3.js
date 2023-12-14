const higherNumber = (numbers) => {
  return numbers.reduce((numberA, numberB) => {
    return numberA > numberB ? numberA : numberB;
  });
};

console.log(higherNumber([2, 3, 1000]));
