<script setup>
import { ref, onMounted } from "vue";
import Dashboard from "./components/Dashboard.vue";
import Header from "./components/Header.vue";
import ModalKomponente from "./components/ModalKomponente.vue";

const showModal = ref(false);
onMounted(() => {
  showModal.value = true;
});
</script>

<template>
  <div class="h-screen">
    <Header />
    <Dashboard />
    <ModalKomponente
      v-if="showModal"
      :show="showModal"
      @close="showModal = false"
    />
  </div>
</template>
