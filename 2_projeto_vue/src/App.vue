<template>
  <div>
    <PrimeiroComponente />
    <p>Esse é o conteúdo do App: {{ testando }}</p>
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";

export default {
  name: "App",
  components: {
    PrimeiroComponente,
  },
  data() {
    return {
      testando: "teste",
    };
  },
};
</script>