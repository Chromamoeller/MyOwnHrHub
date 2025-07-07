<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

function getLastThreeDates() {
  const today = new Date();

  const formatDate = (date) => date.toISOString().split("T")[0]; // Gibt YYYY-MM-DD

  const dates = {
    heute: formatDate(today),
    gestern: formatDate(
      new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)
    ),
    vorgestern: formatDate(
      new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2)
    ),
  };

  return dates;
}

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: [
    getLastThreeDates().vorgestern + " (Vorgestern)",
    getLastThreeDates().gestern + " (Gestern)",
    getLastThreeDates().heute + " (Heute)",
  ],
  datasets: [
    {
      label: "Gearbeitete Stunden in h",
      data: [8, 8.5, 9],
      backgroundColor: ["#4dc9f6", "#f67019", "#f53794"],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monatlicher Umsatz",
    },
  },
};

// Beispiel verwenden:
console.log(getLastThreeDates());
</script>

<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>
