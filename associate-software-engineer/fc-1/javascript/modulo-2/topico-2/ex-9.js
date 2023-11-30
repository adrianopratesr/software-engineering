const cars = [
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

const newProperty = cars.map((car) => {
  return {
    ...car,
    available: true,
  };
});

console.log(newProperty);
