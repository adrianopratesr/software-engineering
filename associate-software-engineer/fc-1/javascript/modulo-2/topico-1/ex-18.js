const fruits = ["abacaxi", "banana", "cereja"];

const order_fruits = fruits.sort((a, b) => {
  return a.length - b.length;
});

console.log(order_fruits);
