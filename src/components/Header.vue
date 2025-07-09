<template>
  <header
    class="bg-white shadow-md px-4 py-3 flex items-center justify-between"
  >
    <!-- Logo/Icon -->
    <div class="flex items-center">
      <img
        :src="pokemonForDisplay.image"
        alt="Logo"
        class="h-20 w-20 object-contain"
      />

      <span class="ml-3 text-xl font-semibold text-gray-800">Meine Seite</span>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-6">
      <a
        href="#"
        class="text-gray-700 hover:text-blue-600 font-medium transition"
        >Link1</a
      >
      <a
        href="#"
        class="text-gray-700 hover:text-blue-600 font-medium transition"
        >Link 2</a
      >
      <a
        href="#"
        class="text-gray-700 hover:text-blue-600 font-medium transition"
        >Link 3</a
      >
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile Navigation Dropdown -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden z-50"
      >
        <a
          href="#"
          class="text-gray-700 hover:text-blue-600 font-medium transition"
          >Link 1</a
        >
        <a
          href="#"
          class="text-gray-700 hover:text-blue-600 font-medium transition"
          >Link 2</a
        >
        <a
          href="#"
          class="text-gray-700 hover:text-blue-600 font-medium transition"
          >Link 3</a
        >
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useUserDataStore } from "../stores/store";

const userDataStore = useUserDataStore();

const pokemonForDisplay = userDataStore.userPokemons;

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
