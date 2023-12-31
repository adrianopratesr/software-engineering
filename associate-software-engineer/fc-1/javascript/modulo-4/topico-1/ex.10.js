const rangeAgeStudents = (age) => {
    if (typeof age !== "number" || age < 0) {
        throw new Error("Favor inserir um número");
     }
    if (age > 0 && age <= 18) {
        return "0-18";
     } else if (age > 18 && age <= 60) {
        return "18-60";
     } else {
        return "60+";
    };
};

try {
    console.log(rangeAgeStudents(-1))
} catch (error) {
    console.error(error.message)
};
