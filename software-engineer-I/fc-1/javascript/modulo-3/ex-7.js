const blueSky = false;
const niceWeather = true;
const wind = true;

const validatePicnicWeather = (blueSky, niceWeather, wind) => {
  if ((niceWeather && blueSky) || !wind) {
    return "É um bom dia para piquinique";
  } else {
    return "Não é um bom dia para piquinique";
  }
};

console.log(validatePicnicWeather(blueSky, niceWeather, wind));
