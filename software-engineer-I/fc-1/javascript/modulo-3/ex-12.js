const length = 10;
const width = 20;

const calculateAreaRectangle = (length, width) => {
  return `A area do retangulo é ${length * width}`;
};

const calculatePerimeterRectangle = (length, width) => {
  return `O perimetro do retangulo é ${length + length + width + width}`;
};

console.log(
  calculateAreaRectangle(length, width) +
    " e " +
    calculatePerimeterRectangle(length, width)
);
