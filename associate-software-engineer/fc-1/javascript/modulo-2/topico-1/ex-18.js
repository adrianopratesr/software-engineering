const fruits = ["abacaxi", "banana", "cereja"];

const orderFruits = fruits.sort((a, b) => {
  return a.length - b.length;
});

console.log(orderFruits);
