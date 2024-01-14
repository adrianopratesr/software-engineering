const helloPromisses = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Olá, promisses!");
  }, 2000);
});

helloPromisses.then((message) => {
  console.log(message);
});
