<template>
  <div>
    <p>Neuer Eintrag</p>
    <div
      class="flex w-full bg-gray-100 rounded-lg shadow-sm font-sans overflow-hidden mt-3 mb-3"
    >
      <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
        <input
          type="text"
          class="w-1/3 border border-gray-300 p-2 rounded-lg"
          placeholder="Grund..."
        />
        <input
          type="number"
          name="Kind"
          id="0"
          class="w-1/3 border border-gray-300 p-2 rounded-lg"
          placeholder="Betrag..."
        />
        <select
          class="w-1/3 border border-gray-300 p-2 rounded-lg"
          name="Kategorie"
          id="Kategorie"
        >
          <option value="0">Optionen Wählen...</option>
          <option value="1">Einahmen</option>
          <option value="2">Ausgaben</option>
        </select>
      </div>
    </div>
    <button class="m-3 p-3 cursor-pointer w-40 h-11 rounded bg-cyan-300">
      Speichern
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
