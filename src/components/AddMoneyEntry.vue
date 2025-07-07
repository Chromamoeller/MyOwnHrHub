<template>
  <div>
    <p>Neuer Eintrag</p>
    <div
      class="flex w-full bg-gray-100 rounded-lg shadow-sm font-sans overflow-hidden mt-3 mb-3"
    >
      <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
        <input
          v-model="beschreibung"
          type="text"
          class="w-1/3 border border-gray-300 p-2 rounded-lg"
          placeholder="Beschreibung..."
        />
        <input
          type="number"
          v-model="betrag"
          id="Betrag"
          class="w-1/3 border border-gray-300 p-2 rounded-lg"
          placeholder="Betrag..."
        />
        <select
          v-model="kategorie"
          class="w-1/3 border border-gray-300 p-2 rounded-lg"
          name="Kategorie"
          id="Kategorie"
        >
          <option disabled value="">Optionen Wählen...</option>
          <option value="einnahmen">Einahmen</option>
          <option value="ausgaben">Ausgaben</option>
        </select>
      </div>
    </div>
    <button
      @click="addMoneyEntry()"
      class="m-3 p-3 cursor-pointer w-40 h-11 rounded bg-cyan-300"
    >
      Speichern
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFinanceValuesStore } from "../stores/store";

const beschreibung = ref("");
const betrag = ref(0);
const kategorie = ref("");

function addMoneyEntry() {
  if (beschreibung.value === "" || betrag.value === 0 || kategorie.value === "")
    return;
  useFinanceValuesStore().addEntry(
    beschreibung.value,
    betrag.value,
    kategorie.value
  );
  beschreibung.value = "";
  betrag.value = 0;
  kategorie.value = "";
}
</script>

<style lang="scss" scoped></style>
