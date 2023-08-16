<template>
  <div>
    <ComponenteHeader />
    <PrimeiroComponente />
    <p class="paragrafo-pai">Esse é o conteúdo do App: {{ testando }}</p>
    <LifeCycle />
    <ComponentePessoa />
    
  </div>
</template>

<script>
import ComponenteHeader from "./components/ComponenteHeader.vue";
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import ComponentePessoa from "./components/ComponentePessoa.vue";



export default {
  name: "App",
  components: {
    ComponenteHeader,
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

  a {
    color:red;
  }
  .teste {
    background-color: #000;
  }

</style>