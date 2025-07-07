<template>
  <div>
    <div class="flex">
      <div class="h-screen w-3/8 to-pink-900 p-5">
        <div class="flex h-full flex-col Test2 bg-gray-200 p-4">
          <LeftsideContainer>
            <Button
              v-for="button in ButtonText"
              :key="button.id"
              :text="button.text"
            />
          </LeftsideContainer>
          <LeftsideContainer>
            <Stundenrechner />
          </LeftsideContainer>
        </div>
      </div>
      <div class="w-5/8 h-screen p-5">
        <div class="h-full flex-col Test2 bg-gray-200 p-4">
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
import { reactive } from "vue";
import RightsideContainer from "./RightsideContainer.vue";
import Finance from "./Finance.vue";
import AddMoneyEntry from "./AddMoneyEntry.vue";
import OverTime from "./OverTime.vue";

const ButtonText = reactive([
  { id: 1, text: "Arbeits Beginn" },
  { id: 2, text: "Arbeits Ende" },
  { id: 3, text: "Pausen Beginn" },
  { id: 4, text: "Pausen Ende" },
]);
</script>

<style scoped></style>
