function randomNumber() {
  return new Promise((resolve) => {
    const randomValue = Math.floor(Math.random() * 5);
    resolve(randomValue);
  });
}

function verifyResult(randomValue, number) {
  return new Promise((resolve, reject) => {
    if (randomValue !== number) {
      reject(`Você errou o numero misterioso era ${randomValue}`);
    }
    resolve("Parabens você acertou o numero misterioso");
  });
}

const main = async () => {
  try {
    const number = await randomNumber();
    const verify = await verifyResult(number, 2);
    console.log(verify);
  } catch (err) {
    console.error(err);
  }
};

main();
