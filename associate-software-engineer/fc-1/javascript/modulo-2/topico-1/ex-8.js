const fruits = ["banana", "maçã", "abacaxi"];

const upperCaseFirst = fruits.map((fruit) => {
  return fruit.replace(fruit[0], fruit[0].toLocaleUpperCase());
});

console.log(upperCaseFirst);
