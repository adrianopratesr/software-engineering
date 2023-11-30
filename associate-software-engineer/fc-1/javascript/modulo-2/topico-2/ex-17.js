const map1 = new Map([["chave1", "valor1"]]);
const mapa2 = new Map([["chave2", "valor2"]]);

const newMap = new Map([...map1, ...mapa2]);
console.log(newMap);
