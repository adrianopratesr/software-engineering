const helloPromisses = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Olá, promisses!");
    }, 2000);
  });

const main = async () => {
  const data = await helloPromisses();
  return console.log(data);
};

main();
