const mapa1 = new Map([["chave1", "valor1"]]);
const mapa2 = new Map([["chave2", "valor2"]]);

let mapa = new Map([...mapa1, ...mapa2]);
console.log(mapa);
