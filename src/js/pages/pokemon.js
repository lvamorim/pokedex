import pokeApi from '../services/pokeApi.js';
import pokemonLoadConfig from '../models/pokemonLoadingConfig.js';
import Popup from '../components/Popup.js';
import PokemonDetails from '../components/PokemonDetails.js';

const queryId = new URLSearchParams(window.location.search).get('id');
const main = document.querySelector('main');

if (queryId <= pokemonLoadConfig.maxRecords) {
  main.innerHTML += Popup()

  pokeApi.getPokemons(queryId - 1, queryId)
    .then(pokemons => {
      const selectedPokemon = pokemons[0];
      main.removeChild(document.querySelector('.popup'));
      main.innerHTML += selectedPokemon && PokemonDetails(selectedPokemon)
    });
}

else {
  document.body.innerHTML = Popup(0);
}
