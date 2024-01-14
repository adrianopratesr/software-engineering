function randomNumber() {
  return new Promise((resolve) => {
    const randomValue = Math.floor(Math.random() * 10);
    setTimeout(() => resolve(randomValue), 1000);
  });
}

function sumNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(2 + 5), 2000);
  });
}

function mutiplySum() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(2 * 2), 3000);
  });
}

Promise.all([randomNumber(), sumNumber(), mutiplySum()]).then((results) => {
  const [result1, result2, result3] = results;
  console.log(result1, result2, result3);
});
