import pokeApi from '../services/pokeApi.js';
import pokemonLoadConfig from '../models/pokemonLoadingConfig.js';
import PokemonCard from '../components/PokemonCard.js';
import PokemonListEnd from '../components/PokemonListEnd.js';

const pokemonList = document.querySelector('.pokemon-list');
const loadMoreButton = document.querySelector('.load-more-button');

const loadPokemonsCards = (offset, limit) => {
  pokeApi.getPokemons(offset, limit)
    .then(pokemons => 
      pokemonList.innerHTML += pokemons.map(PokemonCard).join('')
    );
}

loadPokemonsCards(pokemonLoadConfig.offset, pokemonLoadConfig.limit);

loadMoreButton.addEventListener('click', () => {
  pokemonLoadConfig.offset += pokemonLoadConfig.limit;
  const recordsWithNextPage = pokemonLoadConfig.offset + pokemonLoadConfig.limit;
  
  if (recordsWithNextPage >= pokemonLoadConfig.maxRecords) {
    const newLimit = pokemonLoadConfig.maxRecords - pokemonLoadConfig.offset;
    loadPokemonsCards(pokemonLoadConfig.offset, newLimit);

    const nav = loadMoreButton.parentElement;
    nav.removeChild(loadMoreButton);
    nav.insertAdjacentHTML('afterend', PokemonListEnd());
  }

  else {
    loadPokemonsCards(pokemonLoadConfig.offset, pokemonLoadConfig.limit);
  }
});
