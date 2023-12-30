const doubleNumber = (number) => {
    if (isNaN(number)) {
        throw new Error("Insira um numero")
    }else{
        return number * 2;
    }
}

try{
    console.log(doubleNumber("oi"))
}catch(error){
    console.error(error.message)
}