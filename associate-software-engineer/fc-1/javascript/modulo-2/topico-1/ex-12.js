const salutations = ["Olá", " ", "mundo", "!"];

const salutationReduce = salutations.reduce((salutation, position) => {
  return salutation + position;
});

console.log(salutationReduce);
