<template>
  <div>
    <h1>Finanzen</h1>
    <FinanceInfoBanner
      v-for="value in financeValues"
      :key="value.id"
      :last-purchases="value.lastPurchases"
      :beschreibung="value.beschreibung"
      :color="value.color"
    />
  </div>
</template>

<script setup>
import FinanceInfoBanner from "./Atoms/FinanceInfoBanner.vue";
import { reactive } from "vue";

const financeValues = reactive([
  {
    lastPurchases: 3,
    beschreibung: "Ausgaben",
    color: "Rot",
  },
  {
    lastPurchases: 20,
    beschreibung: "Ausgaben",
    color: "Rot",
  },
  {
    lastPurchases: 10,
    beschreibung: "Einnahmen",
    color: "Grün",
  },
]);
</script>

<style lang="scss" scoped></style>
