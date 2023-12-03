const products = [
  { id: "p1", nome: "Caneta", preco: 1.5 },
  { id: "p2", nome: "Lápis", preco: 0.8 },
];

const newMap = new Map();

products.forEach((id, nome) => {
  newMap.set(id, nome);
});

console.log(newMap);
