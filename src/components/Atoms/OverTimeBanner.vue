<template>
  <div
    :class="`bg-gray-100 flex w-full rounded-lg shadow-sm font-sans overflow-hidden mt-3 mb-3`"
  >
    <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ workplace }}</p>
    </div>
    <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ date }}</p>
    </div>
    <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ start }}</p>
    </div>
    <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ end }}</p>
    </div>
    <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ breakMinutes }}</p>
    </div>
    <!-- <div class="flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0">
      <p>{{ id }}</p>
    </div> -->
  </div>
</template>

<script setup>
const { color } = defineProps({
  id: Number,
  workplace: String,
  date: String,
  start: String,
  end: String,
  breakMinutes: String,
  color: String,
});
const backgroundColor = () => {
  if (color === "Grün") return "bg-green-300";
  if (color === "Rot") return "bg-red-300";
};
</script>

<style lang="scss" scoped></style>
