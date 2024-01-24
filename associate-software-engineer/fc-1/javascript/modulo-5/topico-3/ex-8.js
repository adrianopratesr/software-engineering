const divisaoNumero = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10 / 5);
    }, 2000);
  });
};

const somarNumeros = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2 + 5);
    }, 2000);
  });
};

const multiplicarSoma = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2 * 2);
    }, 3000);
  });
};

const principal = async () => {
  const [resultadoDivisao, resultadoSoma, resultadoMultiplicacao] =
    await Promise.all([divisaoNumero(), somarNumeros(), multiplicarSoma()]);
  console.log(resultadoDivisao, resultadoSoma, resultadoMultiplicacao);
};

principal();
