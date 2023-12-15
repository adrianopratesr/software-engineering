const calcularArea = (base, altura) => {
  if (!base || !altura) {
    return `Entrada invalida, favor atribuir valores para base e altura`;
  } else if (typeof base !== "number" || typeof altura !== "number") {
    return console.log(
      `Entrada invalida, favor inserir apenas numeros entre virgulas para base a altura`
    );
  } else {
    return console.log(`A área do retangulo é: ${base * altura}`);
  }
};

calcularArea(2, 3);
