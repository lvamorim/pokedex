const PokemonBasicInfo = pokemon => {
  return `
    <div class="pokemon-basic-info ${location.pathname.match('pokemon') ? 'pokemon container' : 'home'}">
      <div>
        <h2 class="name">${pokemon.name}</h2>
        <ul class="types">
          ${pokemon.types.map(type => `
            <li class="chip">${type}</li>
          `).join('')}
        </ul>
      </div>
      <h3 class="number">#${pokemon.number.toString().padStart(3, '0')}</h3>
      <img class="artwork" src="${pokemon.image}" alt="${pokemon.name}" loading="lazy">
    </div>
  `;
}

export default PokemonBasicInfo;
