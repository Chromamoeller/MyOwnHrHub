<template>
  <div>
    <p>Perönliche Daten</p>
    <OverTimeBanner
      :userName="useOverTimeStore().name"
      :amount="useOverTimeStore().amount"
      :color="useOverTimeStore().color"
      :Kind="useOverTimeStore().kind"
    />
    <OverTimeBanner
      :userName="useOverTimeStore().name"
      :amount="12"
      :color="useOverTimeStore().color"
      Kind="Urlaub"
    />
  </div>
</template>

<script setup>
import OverTimeBanner from "./Atoms/OverTimeBanner.vue";
import { useOverTimeStore } from "../stores/store";
</script>

<style lang="scss" scoped></style>
