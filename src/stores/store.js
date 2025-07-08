import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useOverTimeStore = defineStore("overTime", () => {
  const amount = ref(10);
  const name = ref("Christian Möller");
  const color = ref("Grün");
  const kind = ref("Überstunden");

  return { amount, name, color, kind };
});

export const useFinanceValuesStore = defineStore("financeValues", () => {
  const financeValues = reactive([
    {
      lastPurchases: -25,
      beschreibung: "Raummiete",
      color: "Rot",
      type: "ausgaben",
      date: "",
    },
    {
      lastPurchases: 100,
      beschreibung: "Tanzkurs",
      color: "Grün",
      type: "einnahme",
      date: "",
    },
    {
      lastPurchases: -10,
      beschreibung: "Eis",
      color: "Rot",
      type: "ausgaben",
      date: "",
    },
  ]);
  function addEntry(beschreibung, betrag, kategorie, date) {
    var parsedBetrag = Number(betrag);
    if (kategorie === "ausgaben" && parsedBetrag > 0) {
      parsedBetrag = parsedBetrag * -1;
    }

    financeValues.push({
      lastPurchases: parsedBetrag,
      beschreibung: beschreibung,
      color: parsedBetrag > 0 ? "Grün" : "Rot",
    });
  }

  return { financeValues, addEntry };
});
