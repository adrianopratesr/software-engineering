const calculateArea = (base, height) => {
    if (!base || !height) {
      throw new Error("Entrada inválida, favor atribuir valores para base e altura");
    }
    if (typeof base !== "number" || typeof height !== "number") {
        throw new Error("Entrada inválida, favor inserir apenas números entre vírgulas para base e altura");
    }
    return base * height;
  };

  try {
    console.log(`A área do retâtangulo é ${calculateArea(4, 6)}`);
  } catch (error) {
    console.error(error.message);
  };
