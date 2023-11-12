const words = ["gato", "cachorro", "peixe", "pássaro"];

const bigWords = words.filter((word) => {
  return word.length > 4;
});

console.log(bigWords);
