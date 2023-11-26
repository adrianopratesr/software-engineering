const produtos = [
  { id: "p1", nome: "Caneta", preco: 1.5 },
  { id: "p2", nome: "Lápis", preco: 0.8 },
];

const convertInMap = new Map();

produtos.forEach((id, nome) => {
  convertInMap.set(id, nome);
});

console.log(convertInMap);
