const calculateArea = (base, height) => {
  if (!base || !height) {
    return `Entrada invalida, favor atribuir valores para base e altura`;
  }
  if (typeof base !== "number" || typeof height !== "number") {
    return `Entrada invalida, favor inserir apenas numeros entre virgulas para base a altura`;
  }
  return `A área do retangulo é: ${base * height}`;
};

console.log(calculateArea(2, 3));
