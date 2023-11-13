const fruits = ["banana", "maçã", "abacaxi"];

const capitalizedWords = fruits.map((fruit) => {
  return fruit.replace(fruit[0], fruit[0].toLocaleUpperCase());
});

console.log(capitalizedWords);
