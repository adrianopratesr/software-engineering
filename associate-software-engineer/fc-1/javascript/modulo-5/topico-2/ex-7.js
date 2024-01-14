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

randomNumber()
  .then((number) => sumNumber(number))
  .then((sumNumber) => mutiplySum(sumNumber, 3))
  .then((mutiplyNumber) => console.log(mutiplyNumber));
