<template>
  <div>
    <div class="flex">
      <div class="h-screen w-3/8 to-pink-900 p-5">
        <div class="flex h-full flex-col Test2 bg-gray-200 p-4 rounded-lg">
          <LeftsideContainer>
            <Button
              v-for="button in buttonContent"
              :key="button.id"
              :text="button.text"
              arbeitsOrt="Deine Mutter2.0"
              :buttonFunction="button.actions"
            />
          </LeftsideContainer>
          <LeftsideContainer>
            <Stundenrechner />
          </LeftsideContainer>
        </div>
      </div>
      <div class="w-5/8 h-screen p-5">
        <div class="h-full flex-col Test2 bg-gray-200 p-4 rounded-lg">
          <RightsideContainer>
            <OverTime />
          </RightsideContainer>
          <RightsideContainer>
            <Finance />
          </RightsideContainer>
          <RightsideContainer>
            <AddMoneyEntry />
          </RightsideContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftsideContainer from "./LeftsideContainer.vue";
import Button from "./Atoms/Button.vue";
import Stundenrechner from "./StundenRechner.vue";
import RightsideContainer from "./RightsideContainer.vue";
import Finance from "./Finance.vue";
import AddMoneyEntry from "./AddMoneyEntry.vue";
import OverTime from "./OverTime.vue";
import axios from "axios";
import { ref } from "vue";

const user_id = ref(0);

const buttonContent = [
  {
    id: 1,
    text: "Arbeits Beginn",
    actions: () => {
      console.log("test");
      const now = new Date();

      const date = now.toISOString().split("T")[0];

      const start = now.toTimeString().slice(0, 5);
      axios
        .post("/api/times/start", {
          user_id: user_id.value,
          date: date,
          start: start,
          end: null,
          breakMinutes: "30",
          workplace: "Homeoffice",
        })
        .then((response) => {
          console.log("Eintrag gespeichert mit ID:", response.data.id);
          user_id.value = response.data.id;
        })
        .catch((error) => {
          console.error(
            "Fehler beim Speichern:",
            error.response?.data || error.message
          );
        });
    },
  },
  {
    id: 2,
    text: "Arbeits Ende",
    actions: () => {
      console.log("test");

      return axios
        .put(`/api/times/${user_id.value}/end`, { end: "16:45" })
        .then((response) => {
          console.log("Arbeitsende gespeichert:", response.data);
          return response.data;
        })
        .catch((error) => {
          console.error(
            "Fehler beim Speichern des Arbeitsendes:",
            error.response?.data || error.message
          );
          throw error;
        });
    },
  },
  {
    id: 3,
    text: "Pausen Beginn",
    actions: () => {
      console.log("test");
    },
  },
  {
    id: 4,
    text: "Pausen Ende",
    actions: () => {
      console.log("test");
    },
  },
];

const ButtonFunction = () => {
  console.log("test");
};
</script>

<style scoped></style>
