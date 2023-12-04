const key = ["chave1", "chave2", "chave3"];
const value = ["valor1", "valor2", "valor3"];

const newMap = new Map();

const createMapFromKeysAndValues = (keys, values) => {
  let initialValue = 0;
  for (const key of keys) {
    newMap.set(key, values[initialValue]);
    initialValue++;
  }
  return newMap;
};

const playFunction = createMapFromKeysAndValues(key, value);

console.log(playFunction);
