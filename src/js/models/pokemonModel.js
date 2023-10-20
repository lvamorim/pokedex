class Pokemon {
  name;
  types = [];
  type;
  number;
  image;
  abilities = [];
  height;
  weight;
}

const pokeApiDetailsToPokemonModel = pokeApiDetails => {
  const pokemon = new Pokemon();
  const types = pokeApiDetails.types.map(types => types.type.name);
  const [type] = types;
  const abilities = pokeApiDetails.abilities.map(abilities => abilities.ability.name);
  
  pokemon.number = pokeApiDetails.id;
  pokemon.name = pokeApiDetails.name;
  pokemon.types = types;
  pokemon.type = type;
  pokemon.image = pokeApiDetails.sprites.other['official-artwork'].front_default;
  pokemon.abilities = abilities.join(', ');
  pokemon.height = ((pokeApiDetails.height * 10) / 100).toFixed(2) + ' cm';
  pokemon.weight = pokeApiDetails.weight / 10 + ' kg';

  return pokemon;
}

export default pokeApiDetailsToPokemonModel;
