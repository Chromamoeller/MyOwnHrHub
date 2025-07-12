<template>
  <div>
    <p>Perönliche Daten</p>
    <!-- <OverTimeBanner
      :color="useOverTimeStore().color"
      :note="useOverTimeStore().note"
      :date="useOverTimeStore().date"
      :breakMinutes="useOverTimeStore().breakMinutes"
      :start="useOverTimeStore().start"
      :end="useOverTimeStore().end"
    /> -->
    <OverTimeBanner
      v-for="item in store.data"
      :key="item.id"
      :item="item"
      :note="item.note"
      :date="item.date"
      :breakMinutes="item.breakMinutes"
      :start="item.start"
      :end="item.end"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import OverTimeBanner from "./Atoms/OverTimeBanner.vue";
import { useOverTimeStore } from "../stores/store";
const store = useOverTimeStore();
// onMounted(() => {
//   store.loadFromBackend();
//   console.log(".Vue ", store.loadFromBackend());
// });
</script>

<style lang="scss" scoped></style>
