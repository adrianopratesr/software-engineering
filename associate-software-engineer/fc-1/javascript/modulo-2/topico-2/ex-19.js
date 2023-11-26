const palavras = ["gato", "cachorro", "gato", "pássaro"];

let mapaPalavras = new Map();

palavras.forEach((chave) => {
  if (mapaPalavras.has(chave)) {
    mapaPalavras.set(chave, mapaPalavras.get(chave) + 1);
  } else {
    mapaPalavras.set(chave, 1);
  }
});

console.log(mapaPalavras);
