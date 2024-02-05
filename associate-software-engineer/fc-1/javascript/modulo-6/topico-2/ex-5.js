const API_KEY = "85ff2a3867ea51b2485de91ffd9917b2";
const city = "São José dos Campos";

const makeOpenWeatherUrl = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
};

const OPEN_WEATHER_URL = makeOpenWeatherUrl(city);

const main = async () => {
  try {
    const getWeatherDataResponse = await fetch(OPEN_WEATHER_URL);
    const response = await getWeatherDataResponse.json();
    const temperature = response.main.temp;
    console.log(`Temperatura em ${city}: ${temperature} °C`);
  } catch (err) {
    console.error("Error:", err);
  }
};

main();
