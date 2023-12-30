try {
    const fragrance = undefined;
    const fragranceCreator = fragrance.creator; 
} catch (error) {
    if (error instanceof TypeError) {
        console.error(error.message);
    }
}
