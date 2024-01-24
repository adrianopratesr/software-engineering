const divisionNumber = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10 / 5);
    }, 2000);
  });
};

const sumNumber = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2 + 5);
    }, 2000);
  });
};

const multiplyNumber = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2 * 2);
    }, 3000);
  });
};

const main = async () => {
  const [resultDivision, resultSum, resultMultiply] = await Promise.all([
    divisionNumber(),
    sumNumber(),
    multiplyNumber(),
  ]);
  console.log(resultDivision, resultSum, resultMultiply);
};

main();
