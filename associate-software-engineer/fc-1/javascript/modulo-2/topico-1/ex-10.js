const words = ["gato", "cachorro", "peixe", "pássaro"];

const low_words = words.filter((word) => {
  return word.length > 4;
});

console.log(low_words);
