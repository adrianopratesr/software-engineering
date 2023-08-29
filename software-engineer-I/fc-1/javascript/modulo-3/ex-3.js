const age1 = 10;
const age2 = 5;

const compareAges = (age1, age2) => {
  if (age1 > age2) {
    return "Idade 1 maior que idade 2";
  } else if (age1 < age2) {
    return "Idade 2 é maior que idade 1";
  } else {
    return "As idades são iguais";
  }
};

console.log(compareAges(age1, age2));
