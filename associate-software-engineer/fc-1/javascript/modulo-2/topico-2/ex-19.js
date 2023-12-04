const words = ["gato", "cachorro", "gato", "pássaro"];

const wordsMap = new Map();

words.forEach((key) => {
  if (wordsMap.has(key)) {
    wordsMap.set(key, wordsMap.get(key) + 1);
  } else {
    wordsMap.set(key, 1);
  }
});

console.log(wordsMap);
