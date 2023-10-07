let cars = {
  weightOne: 10,
  weightTwo: 70,
  weightThree: 50,
  weightFour: 20,
};
let bigValue = 0;

for (let biggerWeight in cars) {
  if (cars[biggerWeight] > bigValue) {
    bigValue = cars[biggerWeight];
  }
}

console.log(bigValue);
