let cars = [
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

console.log(cars);

const carsOfTheYear2020 = cars.filter((car) => {
  return car.year === 2020;
});

console.log(carsOfTheYear2020);
