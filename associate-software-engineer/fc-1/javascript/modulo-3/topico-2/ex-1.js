const newUser = (name, age = 18) => {
  return `O no nome do novo usuário é: ${name} e a idade é ${age}`;
};

console.log(newUser("Adriano"));
