const animals = ["gato", "abelha", "cachorro"];

const animalStartingWithA = animals.find((animal) => {
  return animal[0] === "a";
});

console.log(animalStartingWithA);
