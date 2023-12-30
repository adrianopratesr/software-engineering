const validateEmail = (email) => {
    const emailRegex =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const isEmailValid = emailRegex.test(email)
    if(!isEmailValid) {
        throw new Error("O e-mail inserido é inválido!");
    }
    return isEmailValid;
}

try {
    console.log(validateEmail('adriano@gmail.com'));
} catch (error) {
    console.error(error.message);
}
