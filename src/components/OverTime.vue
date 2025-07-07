<template>
  <div>
    <p>Übrerstudnen</p>
    <OverTimeBanner
      :userName="useOverTimeStore().name"
      :amount="useOverTimeStore().amount + ' std'"
      :color="useOverTimeStore().color"
      :Kind="useOverTimeStore().kind"
    />
  </div>
</template>

<script setup>
import OverTimeBanner from "./Atoms/OverTimeBanner.vue";
import { useOverTimeStore } from "../stores/store";
</script>

<style lang="scss" scoped></style>
