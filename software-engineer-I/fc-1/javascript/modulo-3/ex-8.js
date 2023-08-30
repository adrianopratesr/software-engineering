const salary = 4000;
const increase = 35;

const percentageSalaryIncrease = (salary, increase) => {
  const percentageIncrease = 1 + increase / 100;
  return (salary *= percentageIncrease);
};

console.log(percentageSalaryIncrease(salary, increase));
