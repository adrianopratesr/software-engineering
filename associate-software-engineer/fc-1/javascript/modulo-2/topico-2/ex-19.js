const words = ["gato", "cachorro", "gato", "pássaro"];

const mapWords = new Map();

words.forEach((chave) => {
  if (mapWords.has(chave)) {
    mapWords.set(chave, mapWords.get(chave) + 1);
  } else {
    mapWords.set(chave, 1);
  }
});

console.log(mapWords);
