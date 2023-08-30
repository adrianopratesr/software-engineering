const age = 16;

const validateAgeVote = (age) => {
  if (age >= 18) {
    return "Essa pessoaa é elegivel para votação";
  } else {
    return "Essa pessoa não tem idade para votar";
  }
};

console.log(validateAgeVote(age));
