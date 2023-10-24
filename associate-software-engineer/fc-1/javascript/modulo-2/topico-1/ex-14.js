const animals = ["gato", "abelha", "cachorro"];

const findCharacter = animals.find((animal) => {
  return animal[0] === "a";
});

console.log(findCharacter);
