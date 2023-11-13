const fruits = ["abacaxi", "banana", "cereja"];

const orderedFruits = fruits.sort((a, b) => {
  return a.length - b.length;
});

console.log(orderedFruits);
