function randomNumber() {
  const number = Math.random();

  return new Promise((resolve, reject) => {
    if (number < 0.5) {
      reject("Esse numero não é valido pois é menor que 0,5");
    }
    resolve("O numero é: " + number);
  });
}

const main = async () => {
  try {
    const number = await randomNumber();
    console.log(number);
  } catch (err) {
    console.err(err);
  }
};

randomNumber()
  .then((message) => console.log(message))
  .catch((err) => console.error(err));
