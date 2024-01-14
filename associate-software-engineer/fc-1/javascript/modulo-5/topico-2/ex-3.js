function carTechnicalSheet() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          branchName: "BMW",
          model: "M2",
          hoursePower: 490,
        }),
      2000
    );
  });
}

const carSpec = (carModel) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Especificações do modelo:" + carModel), 3000);
  });
};

carTechnicalSheet()
  .then((carModel) => carSpec(carModel.model))
  .then((technicalInformation) => console.log(technicalInformation))
  .catch((err) => console.err(err));
