const peoples = [...Array(50)].map((_, i) => ({
  name: `Pessoa${i + 1}`,
  dateOfBirth: new Date(1950 + i, 1, 1),
}));

const findPeoples = peoples
  .filter((people) => people.dateOfBirth < new Date("1990-01-01"))
  .sort((actualAge, currentAge) => actualAge.age - currentAge.age)
  .map((people) => `Nome: ${people.name}, Idade: ${people.dateOfBirth}`);

console.log(findPeoples[0]);
