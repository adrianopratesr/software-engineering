const fruits = ["banana", "maçã", "abacaxi"];

const upper_case_first = fruits.map((fruit) => {
  return fruit.replace(fruit[0], fruit[0].toLocaleUpperCase());
});

console.log(upper_case_first);
