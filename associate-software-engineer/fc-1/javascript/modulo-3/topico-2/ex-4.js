const address = {
  street: "Benedito Osvaldo Lecques",
  neighborhood: "Jardim aquairus",
  number: 100,
};

const printAddress = (object) => {
  for (const prop in object) {
    console.log(`${prop} => ${object[prop]}`);
  }
};

printAddress(address);
