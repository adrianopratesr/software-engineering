const carTechnicalSheet = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          branchName: "BMW",
          model: "M2",
          horsePower: 490,
        }),
      2000
    );
  });
};

const carSpec = (carModel) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Especificações do modelo:" + carModel), 3000);
  });
};

const main = async () => {
  try {
    const carModel = await carSpec();
    const technicalInformation = await carTechnicalSheet(carModel);
    console.log(technicalInformation);
  } catch (err) {
    console.error(err);
  }
};

main();
