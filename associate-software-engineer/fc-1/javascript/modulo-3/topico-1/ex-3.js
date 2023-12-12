function simpleSum(numberA, numberB) {
  return numberA + numberB;
}

const sumArrow = (numberA, numberB) => numberA + numberB;

console.log(
  `Com uma função simples ${simpleSum(
    2,
    3
  )}, realizando com uma arrow function ${sumArrow(2, 3)}`
);
