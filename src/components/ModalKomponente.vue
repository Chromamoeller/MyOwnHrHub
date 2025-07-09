<template>
  <div>
    <!-- Das Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-gradient-to-br from-gray-100 via-gray-500 to-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-gray-200 p-6 rounded-xl shadow-lg w-1/2 text-center">
        <CreatePokemon />
        <button
          @click="showModal = false"
          class="mt-4 bg-cyan-500 text-white text-xl px-4 py-2 rounded hover:bg-blue-600 hover:font-bold"
        >
          Verstanden
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CreatePokemon from "./CreatePokemon.vue";

const showModal = ref(false);

onMounted(() => {
  showModal.value = true;
});
</script>
