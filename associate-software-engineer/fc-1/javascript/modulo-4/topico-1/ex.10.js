const rangeAgeStudents = (age) => {
    if (typeof age === "number") {
        throw new Error("Favor inserir um numero");
     } else if (age > 0 && age <= 18) {
        return "0-18";
     } else if (age > 18 && age <= 60) {
        return "18-60";
     } else {
        return "60+";
    };
};

try {
    console.log(rangeAgeStudents("oi"))
} catch (error) {
    console.error(error.message)
};
