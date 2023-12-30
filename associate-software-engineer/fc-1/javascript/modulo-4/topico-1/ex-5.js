const log = (type, message, details) => {
    if (type === "info") {
        return console.log(type, message, details);
    } else if (type === "error") {
        return console.error(type, message, details);
    } else {
        throw new Error("retorne um erro que seja info ou error");
    }
}


try {
    log("info", "oi", {number: 21, numer2: 22});
} catch(error) {
    console.error(error.message);
}