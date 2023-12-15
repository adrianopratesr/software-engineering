const address = {
  street: "Benedito Osvaldo Lecques",
  neighborhood: "Jardim aquairus",
  number: 100,
};

const printddress = (object) => {
  for (const a in object) {
    console.log(`${a} => ${object[a]}`);
  }
};

printddress(address);
