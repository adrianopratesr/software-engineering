const produtos = [
  { id: "p1", nome: "Caneta", preco: 1.5 },
  { id: "p2", nome: "Lápis", preco: 0.8 },
];

let convertInMap = new Map(produtos.id, produtos.name);

console.log(convertInMap);
