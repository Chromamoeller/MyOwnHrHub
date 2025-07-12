<template>
  <button
    @click="useGetDataFromBackendStore().getDataFromBackend()"
    a
    class="m-3 p-3 cursor-pointer w-60 h-20 rounded bg-cyan-200"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { useGetDataFromBackendStore } from "../../stores/getDataFromBackendStore.js";

defineProps({
  text: String,
});
</script>
