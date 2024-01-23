function randomNumber() {
  return new Promise((resolve) => {
    const randomValue = Math.floor(Math.random() * 10);
    resolve(randomValue);
  });
}

function sumNumber(number) {
  return new Promise((resolve) => {
    resolve(2 + number);
  });
}

function mutiplySum(sumNumber, number) {
  return new Promise((resolve) => {
    resolve(sumNumber * number);
  });
}

const main = async () => {
  const randomNumber = await randomNumber();
  const sumNumber = await sumNumber(randomNumber);
  const mutiplyNumber = await mutiplySum(sumNumber);
  console.log(mutiplyNumber);
};
