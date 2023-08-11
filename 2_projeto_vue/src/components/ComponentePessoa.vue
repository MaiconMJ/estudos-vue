<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <ComponenteInfo />
  </div>
</template>

<script>
  import ComponenteInfo from './ComponenteInfo.vue';

  export default {
    name: 'ComponentePessoa',
    components: {
      ComponenteInfo
    },
    data() {
      return {
        nome: 'Maicon'
      }
    }
  }
</script>
