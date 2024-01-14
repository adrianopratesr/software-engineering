const helloPromisses = new Promise((resolve, reject) => {
    const sum = 1 + 3;

    setTimeout(() => {
        if (sum !== 5) {
          reject("Deu ruim!");
        };
        resolve("A soma é 5");
    }, 1000);
  });
  
  helloPromisses.catch(err => {
    console.error(err);
  });
  