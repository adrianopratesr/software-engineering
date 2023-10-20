const salutations = ["Olá", " ", "mundo", "!"];

const salutation_reduce = salutations.reduce((salutation, position) => {
  return salutation + position;
});

console.log(salutation_reduce);
