function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// Exemplo de uso
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Deve retornar 10
console.log(triple(5)); // Deve retornar 15
