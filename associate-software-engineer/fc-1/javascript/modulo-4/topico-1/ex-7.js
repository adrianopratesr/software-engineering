try {
    let obj = null;
    const fragrance = undefined;
    const fragranceCreator = fragrance.creator; 
} catch (error) {
    if (error instanceof TypeError) {
        console.error("TypeError capturado: " + error.message);
    } else if (error instanceof RangeError) {
        console.error("RangeError capturado: " + error.message);
    } else {
        console.error("Erro desconhecido: " + error.message);
    }
}