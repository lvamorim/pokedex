import PokemonBasicInfo from './PokemonBasicInfo.js';

const PokemonCard = pokemon => {
  return `
    <li class="pokemon-card ${pokemon.type}">
      <a href="/pokemon.html?id=${pokemon.number}" aria-label="See ${pokemon.name} details">
        ${PokemonBasicInfo(pokemon)}
      </a>
    </li>
  `;
}

export default PokemonCard;
