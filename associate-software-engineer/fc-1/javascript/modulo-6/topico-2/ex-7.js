const namePokemon = "pikachu";

const makeUrlPokeApi = (namePokemon) => {
  return `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
};

const URL_OPEN_API_POKEAPI = makeUrlPokeApi(namePokemon);

const main = async () => {
  try {
    const getPokemon = await fetch(URL_OPEN_API_POKEAPI);
    const response = await getPokemon.json();
    console.log(`Nome: ${response.name}, Tipo: ${response.types[0].type.name}`);
  } catch (err) {
    console.error("Error:", err);
  }
};

main();
