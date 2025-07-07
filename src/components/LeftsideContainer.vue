<template>
  <div
    class="flex flex-col mt-3 mb-3 items-center border-2 rounded border-gray-400 shadow-lg bg-white"
  >
    <slot> DAs hier wird nur angezeigt wenn ich keinen slot übergebe</slot>
  </div>
</template>

<script setup>
import Button from "./Atoms/Button.vue";
import { ref, reactive } from "vue";

const ButtonText = reactive({
  text: "Arbeits Beginn",
  text2: "Arbeits Ende",
  text3: "Pausen Beginn",
  text4: "Pausen Ende",
});
</script>

<style lang="scss" scoped></style>
