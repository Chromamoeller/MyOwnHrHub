<template>
  <div>
    <p>Perönliche Daten</p>
    <OverTimeBanner
      :userName="useOverTimeStore().name"
      :amount="useOverTimeStore().amount"
      :color="useOverTimeStore().color"
      :kind="useOverTimeStore().kind"
    />
    <OverTimeBanner
      :userName="useOverTimeStore().name"
      :amount="12"
      :color="useOverTimeStore().color"
      kind="Urlaub"
    />
  </div>
</template>

<script setup>
import OverTimeBanner from "./Atoms/OverTimeBanner.vue";
import { useOverTimeStore } from "../stores/store";
</script>

<style lang="scss" scoped></style>
