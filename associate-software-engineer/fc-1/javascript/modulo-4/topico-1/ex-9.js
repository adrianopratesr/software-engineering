const calculateArea = (base, height) => {
    if (!base || !height) {
      throw new Error("Entrada invalida, favor atribuir valores para base e altura");
    }
    if (typeof base !== "number" || typeof height !== "number") {
        throw new ErrorEntrada ("Entrada invalida, favor inserir apenas numeros entre virgulas para base a altura");
    }
    return `A área do retangulo é: ${base * height}`;
  };

  try {
    calculateArea(4, "oi")
  } catch (error) {
    console.error(error.message);
  };
