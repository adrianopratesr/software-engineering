const price = 100;
const sale = 10;
const tax = 10;

const calculateSaleAndTax = (price, sale, tax) => {
  const valueSale = price * (sale / 100);
  const valueTax = price * (tax / 100);
  return price - valueSale + valueTax;
};

console.log(calculateSaleAndTax(price, sale, tax));
