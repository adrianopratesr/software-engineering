const sum = (number1, number2) => {
    if (number1 <= 0 || number2 <= 0) {
        throw new Error("Somente são aceitos números positivos");
    }
    return number1 + number2;
};

console.log(sum(-1, 2));
