<template>
  <div>
    <p>Perönliche Daten</p>
    <OverTimeBanner
      workplace="Arbeitsplatz"
      date="Datum"
      breakMinutes="Pausenzeit"
      start="Arbeitsbeginn"
      end="Arbeitsende"
    />
    <OverTimeBanner
      v-for="item in store.data"
      :id="item.id"
      :item="item"
      :workplace="item.workplace"
      :date="item.date"
      :breakMinutes="item.breakMinutes"
      :start="item.start"
      :end="item.end"
    />
  </div>
</template>

<script setup>
import OverTimeBanner from "./Atoms/OverTimeBanner.vue";
import { useOverTimeStore } from "../stores/store";
const store = useOverTimeStore();
</script>

<style lang="scss" scoped></style>
