<template>
  <div>
    <h1>Finanzen</h1>
    <FinanceInfoBanner
      v-for="value in useFinanceValuesStore().financeValues"
      :key="value.id"
      :last-purchases="value.lastPurchases"
      :beschreibung="value.beschreibung"
      :color="value.color"
    />
  </div>
</template>

<script setup>
import FinanceInfoBanner from "./Atoms/FinanceInfoBanner.vue";
import { useFinanceValuesStore } from "../stores/store";
</script>

<style lang="scss" scoped></style>
