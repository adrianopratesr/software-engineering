const salary = 4000;
const increase = 35;

const calculateSalaryIncrease = (salary, increase) => {
  const percentageIncrease = 1 + increase / 100;
  return (salary *= percentageIncrease);
};

console.log(calculateSalaryIncrease(salary, increase));
