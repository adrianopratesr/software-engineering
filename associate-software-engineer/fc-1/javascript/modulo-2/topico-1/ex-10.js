const words = ["gato", "cachorro", "peixe", "pássaro"];

const lowWords = words.filter((word) => {
  return word.length > 4;
});

console.log(lowWords);
