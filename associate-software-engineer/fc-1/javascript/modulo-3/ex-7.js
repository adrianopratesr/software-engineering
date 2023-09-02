const isBlueSky = false;
const isNiceWeather = true;
const isWind = true;

const validatePicnicWeather = (isBlueSky, isNiceWeather, isWind) => {
  if (isNiceWeather && isBlueSky && !isWind) {
    return "É um bom dia para piquenique";
  } else {
    return "Não é um bom dia para piquenique";
  }
};

console.log(validatePicnicWeather(isBlueSky, isNiceWeather, isWind));
