import PokemonBasicInfo from './PokemonBasicInfo.js';

const PokemonDetails = pokemon => {
  document.body.classList.add(pokemon.type);
  
  return `
    ${PokemonBasicInfo(pokemon)}
    <section class="pokemon-details">
      <div class="container">
        <nav>
          <ul>
            <li>About</li>
          </ul>
        </nav>
        <table>
          <tr>
            <th>Height</th>
            <td>${pokemon.height}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>${pokemon.weight}</td>
          </tr>
          <tr>
            <th>Abilities</th>
            <td class="abilities">${pokemon.abilities}</td>
          </tr>
        </table>
      </div>
    </section>
  `;
}

export default PokemonDetails;
