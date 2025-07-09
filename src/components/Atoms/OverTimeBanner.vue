<template>
  <div
    class="flex w-full bg-gray-100 rounded-lg shadow-sm font-sans overflow-hidden mt-3 mb-3"
  >
    <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ kind }}</p>
    </div>
    <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ amount }}</p>
    </div>
    <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ userName }}</p>
    </div>

    <div
      :class="` ${backgroundColor()} flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0`"
    >
      {{ color }}
    </div>
  </div>
</template>

<script setup>
const { color } = defineProps({
  kind: String,
  userName: String,
  amount: Number,
  color: String,
});
const backgroundColor = () => {
  if (color === "Grün") return "bg-green-300";
  if (color === "Rot") return "bg-red-300";
};
</script>

<style lang="scss" scoped></style>
