const price = 100;
const discountRate = 10;
const tax = 10;

const calculateDiscountAndTax = (price, discountRate, tax) => {
  const discountValue = price * (discountRate / 100);
  const taxValue = price * (tax / 100);
  return (price - discountValue) + taxValue;
};

console.log(calculateDiscountAndTax(price, discountRate, tax));
