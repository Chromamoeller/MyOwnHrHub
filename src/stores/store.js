import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useOverTimeStore = defineStore("overTime", () => {
  const amount = ref(10);
  const name = ref("Christian Möller");
  const color = ref("Grün");
  const kind = ref("Überstunden");

  return { amount, name, color, kind };
});

export const financeValuesStore = defineStore("financeValues", () => {
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
  return { financeValues };
});
