// 🔹 Funktion außerhalb des Stores (wie gehabt)
const getDataFromBackend = async () => {
  const response = await axios.get("http://localhost:3000/api/times");
  return response.data; // Gibt mir eine Liste an Objekten zurück
};

// 🔸 Store
import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axios from "axios";

export const useOverTimeStore = defineStore("overTime", () => {
  console.log("Store wird aufgerufen");

  const data = ref([]); // Hier werden die Daten gespeichert

  const loadFromBackend = async () => {
    try {
      console.log("Lade Daten vom Backend...");
      const result = await getDataFromBackend();
      data.value = result;
      console.log("Daten geladen:", data.value);
    } catch (err) {
      console.error("Fehler beim Laden der Daten:", err);
    }
  };

  // Optional: Automatisches Laden beim ersten Aufruf
  loadFromBackend();

  return {
    data,
    loadFromBackend, // Exportiere die Funktion, falls du sie manuell nochmal aufrufen willst
  };
});

export const useFinanceValuesStore = defineStore("financeValues", () => {
  const financeValues = reactive([
    {
      lastPurchases: -25,
      beschreibung: "Raummiete",
      color: "Rot",
      type: "ausgaben",
      date: "",
    },
    {
      lastPurchases: 100,
      beschreibung: "Tanzkurs",
      color: "Grün",
      type: "einnahme",
      date: "",
    },
    {
      lastPurchases: -10,
      beschreibung: "Eis",
      color: "Rot",
      type: "ausgaben",
      date: "",
    },
  ]);
  function addEntry(beschreibung, betrag, kategorie) {
    var parsedBetrag = Number(betrag);
    if (kategorie === "ausgaben" && parsedBetrag > 0) {
      parsedBetrag = parsedBetrag * -1;
    }

    financeValues.push({
      lastPurchases: parsedBetrag,
      beschreibung: beschreibung,
      color: parsedBetrag > 0 ? "Grün" : "Rot",
    });
  }

  return { financeValues, addEntry };
});

export const useUserDataStore = defineStore("userData", () => {
  const userPokemons = reactive({
    id: 2,
    name: "Bisaknosp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    types: ["grass", "poison"],
  });
  function saveUserPokemons(pokemonObject) {
    userPokemons.id = pokemonObject.id;
    userPokemons.name = pokemonObject.name;
    userPokemons.image = pokemonObject.image;
    userPokemons.types = pokemonObject.types;
  }
  return { userPokemons, saveUserPokemons };
});
