const helloPromisses = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number !== 5) {
        reject("Deu ruim!");
      }
      resolve("A soma é 5");
    }, 1000);
  });

const main = async () => {
  try {
    const data = await helloPromisses(5);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

main();
