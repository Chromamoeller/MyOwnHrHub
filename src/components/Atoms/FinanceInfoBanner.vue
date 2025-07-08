<template>
  <div
    class="flex w-full bg-gray-100 rounded-lg shadow-sm font-sans overflow-hidden mt-3 mb-3"
  >
    <div
      v-for="(section, index) in computedSections"
      :key="index"
      :class="`flex-1 px-4 py-3 border-r border-gray-300 last:border-r-0 ${backgroundColor()}`"
    >
      {{ section }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sections: {
    type: Array,
    default: () => [
      "beschreibung",
      "lastPurchases",
      new Date().toLocaleDateString("de-DE"),
      "Edit",
    ],
  },
  lastPurchases: {
    type: Number,
    default: 0,
  },
  beschreibung: {
    type: String,
    default: "Beschreibung",
  },
  color: {
    type: String,
    default: "Grün",
  },
});

// Dynamisch ersetzen
const computedSections = props.sections.map((val) => {
  if (val === "lastPurchases") return props.lastPurchases + " €";
  if (val === "beschreibung") return props.beschreibung;
  if (val === "color") return props.color;
  if (val === "Date") return new Date().toLocaleDateString("de-DE");
  return val;
});

function backgroundColor() {
  if (props.color === "Grün") return "bg-green-300";
  if (props.color === "Rot") return "bg-red-300";
}
</script>
