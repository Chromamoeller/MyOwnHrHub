<template>
  <button class="m-3 p-3 cursor-pointer w-60 h-20 rounded bg-cyan-200">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
});
</script>

<style lang="scss" scoped></style>
