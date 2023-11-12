const salutations = ["Olá", " ", "mundo", "!"];

const salutation = salutations.reduce((salutation, item) => {
  return salutation + item;
}, "");

console.log(salutation);
