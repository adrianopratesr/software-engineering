const productStock = 11;
const classifyProduct = (item) => {
  if (item <= 5) {
    return console.log("Estoque baixo");
  } else if (item > 5 && item <= 10) {
    return console.log("Estoque mediano");
  } else {
    return console.log("Estoque lotado");
  }
};

classifyProduct(productStock);
