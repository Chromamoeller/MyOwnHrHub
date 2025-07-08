process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

import axios from "axios";
import fs from "fs";

const POKEMON_COUNT = 151;
const outputFile = "pokemon151.json";

async function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((t) => t.type.name),
    };
  } catch (error) {
    console.error(`Fehler bei Pokémon ID ${id}:`, error.message);
    return null;
  }
}

async function fetchAllPokemon() {
  const pokemonList = [];

  for (let id = 1; id <= POKEMON_COUNT; id++) {
    console.log(`Lade Pokémon #${id} ...`);
    const pokemon = await fetchPokemon(id);
    if (pokemon) {
      pokemonList.push(pokemon);
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(pokemonList, null, 2));
  console.log(`✔️  Fertig! Gespeichert in: ${outputFile}`);
}

fetchAllPokemon();
