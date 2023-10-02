const string1 = "Adriano";
const string2 = "Luana";

const compareStrings = (string1, string2) => {
  if (string1 === string2) {
    return "As strings são iguais";
  } else {
    return "As strings são diferentes";
  }
};

console.log(compareStrings(string1, string2));
