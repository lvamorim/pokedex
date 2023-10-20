import pokeApiDetailsToPokemonModel from '../models/pokemonModel.js';
import Popup from '../components/Popup.js';

const pokeApi = {};

pokeApi.getPokemonsDetails = pokemon => {
  return fetch(pokemon.url)
    .then(response => response.json())
    .then(pokeApiDetailsToPokemonModel);
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then(response => response.json())
    .then(body => body.results)
    .then(pokemons => pokemons.map(pokeApi.getPokemonsDetails))
    .then(detailsRequests => Promise.all(detailsRequests))
    .catch(error => {
      console.log(error);
      document.body.innerHTML = Popup(1);
    });
}

export default pokeApi;
