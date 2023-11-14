let car = [
  {
    brand: "BMW",
    model: "M2",
    year: 2020,
  },
  {
    brand: "mercedes",
    model: "slr amg",
    year: 2009,
  },
  {
    brand: "cardilac",
    model: "escalade",
    year: 2024,
  },
];

console.log(car);

const carOfTheYear2020 = car.filter((car) => {
  return car.year === 2020;
});

console.log(carOfTheYear2020);
