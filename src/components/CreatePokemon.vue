<template>
  <div class="flex w-full h-full bg-gray-200">
    <div
      @click="doSomething"
      v-for="pokemon in pokemonForDisplay"
      :key="pokemon.id"
      :class="`flex cursor-pointer flex-col items-center w-1/3 h-1/3 justify-center p-3 ml-3 mr-3 rounded-2xl shadow-md ${getTypeClass(
        pokemon.types
      )}`"
    >
      <img class="" :src="pokemon.image" />
      <p
        class="font-bold text-2xl text-gray-800 mt-3 mb-3 first-letter:uppercase"
      >
        {{ pokemon.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import AllPokemon from "../api/pokemon151.json";
import {
  typeColors,
  typeColorsFrom,
  typeColorsTo,
} from "../api/PokemonTypes.js";
import { useUserDataStore } from "../stores/store";

const userDataStore = useUserDataStore();

const pokemonForDisplay = [];

const usedIndexes = new Set();
while (pokemonForDisplay.length < 5) {
  const index = Math.floor(Math.random() * AllPokemon.length);
  if (!usedIndexes.has(index)) {
    usedIndexes.add(index);
    pokemonForDisplay.push(AllPokemon[index]);
  }
}

function getTypeClass(types) {
  if (types.length === 1) {
    return typeColors[types];
  }
  if (types.length === 2) {
    return `bg-gradient-to-br ${typeColorsFrom[types[0]]} ${
      typeColorsTo[types[1]]
    }`;
  }
}
function doSomething() {
  userDataStore.saveUserPokemons(pokemonForDisplay[0]);
}
</script>

<style lang="scss" scoped></style>
