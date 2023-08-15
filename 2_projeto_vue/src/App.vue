<template>
  <div>
    <PrimeiroComponente />
    <p>Esse é o conteúdo do App: {{ testando }}</p>
    <LifeCycle />
    <ComponentePessoa />
    
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import ComponentePessoa from "./components/ComponentePessoa.vue";



export default {
  name: "App",
  components: {
    PrimeiroComponente,
    LifeCycle,
    ComponentePessoa
    
  },
  data() {
    return {
      testando: "teste",
    };
  },
};
</script>

<style>
  body {
    background-color: #333;
    color: #fff
  }
</style>