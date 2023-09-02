let userIsValid = true;
let keyIsValid = true;

const verifyUser = (user, key) => {
  if (user && key) {
    return "Usuário autenticado com sucesso";
  } else {
    return "Senha ou usuário incorreto";
  }
};

console.log(verifyUser(userIsValid, keyIsValid));
