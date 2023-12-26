const validateEmail = (email) => {
    const emailRegex =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (!emailRegex.test(email)) {
        throw new Error("O e-mail inserido é inválido!")
    }
    return "E-mail inserido corretamente"
}

try {
    console.log(validateEmail('adriano@gmail.com'));
} catch (error) {
    console.error(error.message);
}