const API_KEY = "d83a44e4610f4bc28d4404628341aea8";
const query = "Inception";

const makeTMDbUrl = (query, API_KEY) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
};

const OPEN_TMDb_URL = makeTMDbUrl(query, API_KEY);

const main = async () => {
  try {
    const getFilmResponse = await fetch(OPEN_TMDb_URL);
    const response = await getFilmResponse.json();
    response.results.forEach((movie) => console.log(movie.title));
  } catch (err) {
    console.error("Error:", err);
  }
};

main();
