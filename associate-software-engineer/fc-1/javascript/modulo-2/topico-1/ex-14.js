const animals = ["gato", "abelha", "cachorro"];

const find_character = animals.find((animal) => {
  return animal[0] === "a";
});

console.log(find_character);
